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
  const uenoPark = {
    title: "우에노 공원",
    contents: "세 개의 박물관, 콘서트홀, 신사, 카페, 동물원 등이 있는 공원.",
    url: "https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno",
    hours: "-",
    position: { lat: 35.714975517097606, lng: 139.77342915434815 },
  };
  const ameyoko = {
    title: "아메요코 상점가",
    contents: "도쿄 최대의 재래시장. 일본의 남대문 시장으로 한국에서 잘 알려져있다.",
    url: "",
    hours: "-",
    position: { lat: 35.7100954986846, lng: 139.77457416855634 },
  };
  const sensoji = {
    title: "센소지",
    contents: "도쿄에서 가장 오래된 절. 앞 쪽으로는 나카미세도리 라는 상점가가 길게 이어져있다.",
    url: "",
    hours: "-",
    position: { lat: 35.71491972459064, lng: 139.79663443691956 },
  };
  const openLink = (place: string) => {
    if (place === "art") {
      window.open("https://www.nmwa.go.jp/ko/");
    } else {
      window.open("https://www.tnm.jp/?lang=ko");
    }
  };

  return (
    <div className={styles.detail__wrap}>
      <div className={styles.detail__title}>
        1월 19일 일요일
        <span className={styles.detail__title_desc}> ( 2 / 5 )</span>
      </div>
      <div className="mg-top-20">
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>09:00</div>
          <div className={styles.detail__content}>🏃🏻‍♀️ 숙소 출발</div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>09:30</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>🌳 우에노역 도착</div>
            <div className={`mg-top-14 ${styles.detail__content}`}>🍜 아침</div>
            {/* <div className={styles.detail__desc}>
              공항 → 호텔 이동 (약 30분 소요)
            </div> */}
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time_fixed}>10:30</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>🎨 국립서양미술관</div>
            <div className={styles.detail__desc}>
              특별전(모네) 관람 후 상설전시로 이동
              <div
                className={styles.detail__link}
                onClick={() => openLink("art")}
              >
                전시 및 미술관 정보
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>13:00</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>
              ☕️ 점심 / 우에노 공원 산책
              <div className={styles.detail__spot}>
                <FoldInfo info={uenoPark} title="우에노 공원|上野恩賜公園" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>14:30</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>🏛️ 도쿄국립박물관</div>
            <div className={styles.detail__desc}>
              특별전(키티) 관람 후 상설전시로 이동<br/>
              * 17:00 폐관
              <div
                className={styles.detail__link}
                onClick={() => openLink("national")}
              >
                전시 및 박물관 정보
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>17:00</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>🛍️ 상점가 구경 / 저녁</div>
            <div className={styles.detail__spot}>
                <FoldInfo info={ameyoko} title="아메요코 상점가|上野アメ横商店街" />
              </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>**:**</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>🪷 센소지</div>
            <div className={styles.detail__spot}>
                <FoldInfo info={sensoji} title="센소지|浅草寺" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
