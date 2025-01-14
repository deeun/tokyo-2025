"use client";

import { useEffect, useState } from "react";
import styles from "./foldInfo.module.css";
import Map from "@/app/components/Map/map";

export interface PlaceInfoProps{
  title?: string | undefined,
  contents?: string,
  url?: string,
  hours?: string,
  position?: { lat: number, lng: number }
}
export type PlaceInfoClusterProps = PlaceInfoProps[];
export interface FoldProps {
  title: string;
  info: PlaceInfoProps;
  overview?: boolean;
  cluster?: PlaceInfoClusterProps;
}
function FoldInfo(props: FoldProps) {
  const [show, setShow] = useState(false);
  const [mapKey, setMapKey] = useState<string | undefined>('');

  useEffect(() => {
    setMapKey(process.env.NEXT_PUBLIC_MAP_KEY);
  }, [mapKey]);
  const openLink = (url: string | undefined) => {
    if (url) {
      window.open(url);
    }
  };
  return (
    <div>
      <div className={styles.fold__title} onClick={() => setShow(!show)}>
        <span>{show ? "▼ " : "▶︎ "}︎</span>
        {props.title.split('|')[0]}
        <span className={styles.fold__title_jap}> {props.title.split('|')[1]}</span>
      </div>
      <div className={styles.footer__contents_wrap}>
        {show && (
          <div className={styles.fold__contents}>
            {props.info.contents}
            <div className={styles.fold__hours}>운영시간: {props.info.hours}</div>
            {props.info.url !== "" && (
              <div
                className={styles.fold__url}
                onClick={() => openLink(props.info.url)}
              >
                공식 페이지
              </div>
            )}
            {props.overview && props.cluster ? (
              <div>
                <Map locations={props.cluster} />
              </div>
            ) : (
              <Map locations={props.info} height={120} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default FoldInfo;
