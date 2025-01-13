"use client";

import { useEffect, useState } from "react";
import styles from "./foldInfo.module.css";
import Map from "@/app/components/Map/map";

export interface FoldProps {
  title: String;
  info: any;
  overview?: Boolean;
  cluster?: Object;
}
function FoldInfo(props: FoldProps) {
  const [show, setShow] = useState(false);
  const [mapKey, setMapKey] = useState<any>();
  const [info, setInfo] = useState({ contents: '', hours: '', url: '', marker: {} });
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
              <iframe
                width="100%"
                style={{ border: "none" }}
                height="120"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=place_id:${info.marker}`}
              ></iframe>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default FoldInfo;
