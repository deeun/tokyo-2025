"use client";

import { useEffect, useState } from "react";
import styles from "./foldInfo.module.css";

function FoldInfo(props) {
  const [show, setShow] = useState(false);
  const [mapKey, setMapKey] = useState("");
  useEffect(() => {
    setMapKey(process.env.NEXT_PUBLIC_MAP_KEY);
  }, [mapKey]);
  const openLink = (url: string) => {
    console.log(url);
    window.open(url);
  };
  return (
    <div onClick={() => setShow(!show)}>
      <div className={styles.fold__title}>
        <span>{show ? "▼ " : "▶︎ "}︎</span>
        {props.title}
      </div>
      <div className={styles.footer__contents_wrap}>
        {show && (
          <div className={styles.fold__contents}>
            {props.contents}
            <div
              className={styles.fold__url}
              onClick={() => openLink(props.url)}
            >
              공식 페이지
            </div>
            <iframe
              width="100%"
              style={{ border: "none" }}
              height="120"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=place_id:${props.marker}`}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default FoldInfo;
