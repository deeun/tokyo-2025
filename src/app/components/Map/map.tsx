"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../../store/loadingSlice";

export interface MapProps {
  width?: string;
  height?: string;
  locations?: { title: string; position: { lat: string; lng: string } };
  place?: { lat: ""; lng: "" };
}
function Map(props: MapProps) {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const dispatch = useDispatch();

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
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 35.67238207461945, lng: 139.76666059178848 },
        zoom: 17,
        mapId: "tokyomap",
        // disableDefaultUI: false,
      });

      setMap(map);
      await addMarkers(map, props.locations);
    }
  };

  let marker;
  const addMarkers = async (
    newMap: google.maps.Map<Element>,
    newLocations: object[]
  ) => {
    const { AdvancedMarkerElement } = await google.maps?.importLibrary(
      "marker"
    );
    if (props.place) {
      newMap.setCenter(props.place);
      marker = new AdvancedMarkerElement({
        map: newMap,
        position: props.place,
        gmpClickable: true,
      });
    } else {
      newMap.setCenter(newLocations[0].position);
      newLocations?.forEach((l: any) => {
        const tag = document.createElement("div");
        tag.className = "map-tag";
        tag.textContent = l.title;
        marker = new AdvancedMarkerElement({
          map: newMap,
          position: l.position,
          content: tag,
        });
        addClickEvent(marker, newMap)
      });
    }
    dispatch(setLoading(false));
  };

  const addClickEvent = (targetMarker, map) => {
    targetMarker.addListener("click", ({ domEvent, latLng }) => {

      const infoWindow = new google.maps.InfoWindow({
        content: `<a href=https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAP_KEY}&q=place_id:ChIJAQAsR--LGGAR_AmB8WMDy88>부릉부릉</a>`,
      });

      console.log("click", latLng);
      const { target } = domEvent;
      infoWindow.setPosition(targetMarker.position);
      infoWindow.close();
      infoWindow.setContent(`<a href=https://www.google.com/maps/place?key=${process.env.NEXT_PUBLIC_MAP_KEY}&q=긴자+식스&place_id:ChIJAQAsR--LGGAR_AmB8WMDy88>부릉부릉</a>`,
);
      infoWindow.open(map, targetMarker);
    });
  }  

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
