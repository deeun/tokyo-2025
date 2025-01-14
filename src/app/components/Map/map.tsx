"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../../store/loadingSlice";

export interface PlaceInfoProps {
  title: string,
  contents?: string,
  url?: string,
  hours?: string,
  position: { lat: number, lng: number }
}
export type PlaceInfoClusterProps = PlaceInfoProps[];
export interface MapProps {
  width?: string;
  height?: string | number;
  locations?: PlaceInfoProps;
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

  // 장소 마커 추가
  let marker;
  const addMarkers = async (
    newMap: google.maps.Map<Element>,
    newLocations: object[]
  ) => {
    const { AdvancedMarkerElement } = await google.maps?.importLibrary("marker");
    if (!Array.isArray(props.locations)) {
      newMap.setCenter(props.locations.position);
      marker = new AdvancedMarkerElement({
        map: newMap,
        position: props.locations.position,
        gmpClickable: true,
      });
      onClickMarker(marker, newMap, props.locations);
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
        onClickOpenInfoWindow(marker, newMap, l);
      });
    }
    dispatch(setLoading(false));
  };

  const onClickMarker = (targetMarker, map, info) => {
    targetMarker.addListener("click", () => {
      window.open(`https://www.google.com/maps/place?q=${info.title.split(' ').join('+')}`, '_self')
    });
  }
  
  const onClickOpenInfoWindow = (targetMarker, map, info) => {
    targetMarker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow();
      infoWindow.setPosition(targetMarker.position);
      infoWindow.close();
      const searchWord = info.keyword ? info.keyword.split(' ').join('+') : info.title.split(' ').join('+');
      infoWindow.setContent(
        `<div>운영시간: ${info.hours}</div>
        <a href=https://www.google.com/maps/place?q=${searchWord}>Google 지도에서 보기</a>`
      );
      infoWindow.open(map, targetMarker);
    });
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
