"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../../store/loadingSlice";

export interface MapProps {
  width?: string;
  height?: string;
  locations?: {title: string, position: {lat: string, lng: string}};
}
function Map(props: MapProps) {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const dispatch = useDispatch();
//   const loading = useSelector(state => state.loadingReducer.loading)
  useEffect(() => {
    dispatch(setLoading(true));
    // GoogleMap.js 스크립트 로드 기다리기
    window.initMap = initMap;

    // 스크립트가 이미 페이지에 존재하는지 확인
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAP_KEY}&callback=initMap`;
      script.defer = true;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      window.initMap = null;
    };
  }, []);

  // 지도 초기화
  const initMap = async () => {
    if (window.google && !map) {
      await navigator.geolocation.getCurrentPosition(function async(position) {
        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const map = new window.google.maps.Map(mapRef.current, {
          center: currentLocation,
          zoom: 17,
          mapId: "tokyomap",
          disableDefaultUI: true,
        });

        setMap(map);
        addMarkers(map, props.locations);
      });
    }
  };

  const addMarkers = async (
    newMap: google.maps.Map<Element>,
    newLocations: object[]
  ) => {
    const { AdvancedMarkerElement } = await google.maps?.importLibrary(
      "marker"
    );
    let marker;
    await newMap.setCenter(newLocations[0].position);
    newLocations?.forEach((l: any) => {
      const tag = document.createElement("div");
      tag.className = "map-tag";
      tag.textContent = l.title;
      marker = new AdvancedMarkerElement({
        map: newMap,
        position: l.position,
        content: tag,
      });
    });

    await dispatch(setLoading(false));
  };

  return (
    <>
        <div
          id="map"
          ref={mapRef}
          style={{
            height: props.height ? props.height : "400px",
            width: props.width ? props.width : "100%",
          }}
        />
    </>
  );
}

export default Map;
