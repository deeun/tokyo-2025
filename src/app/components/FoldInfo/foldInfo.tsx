"use client";

import { useEffect, useState } from "react";
import styles from "./foldInfo.module.css";
import Map from "@/app/components/Map/map";

export interface FoldProps {
  title: string;
  info: {contents: string, url: string, hours: string, marker: string, place: object};
  overview?: boolean;
  cluster?: object;
}
function FoldInfo(props: FoldProps) {
  const [show, setShow] = useState(false);
  const [mapKey, setMapKey] = useState<string>('');
  const [info, setInfo] = useState({ contents: '', hours: '', url: '', marker: '', place: {} });
  useEffect(() => {
    setInfo(props.info);
    setMapKey(process.env.NEXT_PUBLIC_MAP_KEY);
  }, [mapKey]);
  const openLink = (url: string) => {
    console.log(url);
    window.open(url);
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
            {info.contents}
            <div className={styles.fold__hours}>운영시간: {info.hours}</div>
            {info.url !== "" && (
              <div
                className={styles.fold__url}
                onClick={() => openLink(info.url)}
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
              // <iframe
              //   width="100%"
              //   style={{ border: "none" }}
              //   height="120"
              //   loading="lazy"
              //   allowFullScreen
              //   referrerPolicy="no-referrer-when-downgrade"
              //   src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=place_id:${info.marker}`}
              // ></iframe>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default FoldInfo;
