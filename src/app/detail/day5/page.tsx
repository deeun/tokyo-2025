"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../detail.module.css";
import FoldInfo from "@/app/components/FoldInfo/foldInfo";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../../store/loadingSlice";

function Page() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(false));
  }, []);
  const malls = {
    contents: "",
    url: "",
    hours: "매장별 확인 필요",
  };
  const mallCluster = [
    {
      title: "도큐 스퀘어",
      keyword: "미나토미라이 도큐 스퀘어",
      position: { lat: 35.45653928224966, lng: 139.63285833055852 },
      hours: "11:00 - 20:00",
    },
    {
      title: "MARK IS 미나토미라이",
      position: { lat: 35.45812037010439, lng: 139.63178274338316 },
      hours: "10:00 - 20:00",
    },
    {
      title: "요코하마 랜드마크 타워",
      position: { lat: 35.455047984422855, lng: 139.63138635356864 },
      hours: "11:00 - 20:00",
    },
    {
      title: "퀸즈 스퀘어 요코하마",
      position: { lat: 35.45690974090762, lng: 139.63437172874637 },
      hours: "11:00 - 19:00",
    },
  ];
  const openLink = (place: string) => {
    if (place === "massage") {
      window.open("https://sriayutthayaspa.com/");
    } else {
      window.open("https://gonpachi.jp/nishi-azabu/");
    }
  };

  return (
    <div className={styles.detail__wrap}>
      <div className={styles.detail__title}>
        1월 22일 수요일
        <span className={styles.detail__title_desc}> ( 5 / 5 )</span>
      </div>
      <div className="mg-top-20">
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time_fixed}>11:00</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>
              👋🏻 호텔 체크아웃
              <div className={styles.detail__desc}>로비에 짐 맡기기</div>
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>11:30</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>
              🛍️ 미나토미라이 구경 & 쇼핑
              <div className={styles.detail__spot}>
                <FoldInfo
                  info={malls}
                  title="각종 쇼핑몰 구경"
                  overview={true}
                  cluster={mallCluster}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time_fixed}>16:53</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>
              🚍 요코하마 → 공항 이동
              <div className={styles.detail__desc}>
                호텔 앞에서 리무진버스 탑승
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time_fixed}>17:56</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>🧳 하네다 공항 도착</div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time_fixed}>19:50</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>🛫 일본 출국</div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time_fixed}>22:25</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>🛬 한국 도착</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
