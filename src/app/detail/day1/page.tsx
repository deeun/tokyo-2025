"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../detail.module.css";
import FoldInfo from "@/app/components/FoldInfo/foldInfo";
import Map from "@/app/components/Map/map";

function Page() {
  const ginzaSix = {
    contents: "250개의 브랜드 매장이 입점한 긴자 최대 규모의 복합 쇼핑몰.",
    url: "https://ginza6.tokyo.e.abf.hp.transer.com/shops/",
    marker: "ChIJAQAsR--LGGAR_AmB8WMDy88",
    hours: "10:30 - 20:30",
  };
  const uniqlo = {
    contents: "1 ~ 12층까지 건물 전체가 유니클로.",
    url: "",
    marker: "ChIJb9MHbuaLGGAR0xi-noU25UU",
    hours: "11:00 - 21:00",
  };
  const kuya = {
    contents: "1891 설립 후 3대 째 운영 중. 모나카가 제일 유명하다.",
    url: "",
    marker: "ChIJqfbrAOaLGGARjRJSt5urSCQ",
    hours: "10:00 - 16:00",
  };
  const itoya = {
    contents:
      "1904년 창업한 전13층의 대규모 문구 전문점. 본점인 G.Itoya와, 길 건너편 고급 필기구 전문 매장인 K.Itoya 매장으로 구분.",
    url: "https://www.ito-ya.co.jp/ext/store/ginza/ginza/index.html#event",
    marker: "ChIJKQAKAOSLGGARwGhpOXWgfYo",
    hours: "10:00 - 20:00",
  };
  const kimuraya = {
    contents: "1869년 설립. 세계 최초로 단팥빵이 탄생한 곳.",
    url: "",
    marker: "ChIJm2TXf-aLGGARtR9aL0V6gxE",
    hours: "10:00 - 20:00",
  };
  const loft = {
    contents: "화장품 및 잡화 매장",
    url: "",
    marker: "ChIJm2TXf-aLGGARtR9aL0V6gxE",
    hours: "11:00 - 21:00 (일 20:00)",
  };
  const brands = {
    contents: "",
    url: "",
    marker: "",
    hours: "매장별 확인 필요",
  };

  const brandCluster = [
    { title: '에르메스 긴자', position: { lat: 35.67220270841222, lng: 139.76351396445938 }},
    { title: '몽클레어 긴자', position: { lat: 35.67390703501073, lng: 139.76716649666173 }},
    { title: '몽클레어 긴자 우먼', position: { lat: 35.67238207461945, lng: 139.76666059178848 }},
    { title: '까르띠에 긴자', position: { lat: 35.67344430727107, lng: 139.76670139340388 }},
    { title: 'sacai 미츠코시긴자', position: { lat: 35.67149779807367, lng: 139.7656136168124 }},
  ]

  return (
    <div className={styles.detail__wrap}>
      1월 18일 일요일 ( 1 / 5 )
      <div className="mg-top-20">
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time_fixed}>09:00</div>
          <div className={styles.detail__content}>🛫 김포공항 이륙</div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time_fixed}>11:05</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>🛬 하네다 공항 착륙</div>
            <div className={styles.detail__desc}>
              공항 → 호텔 이동 (약 30분 소요)
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>12:30</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>
              🏠 호텔 체크인 & 짐맡기기
            </div>
            <div className={`mg-top-14 ${styles.detail__content}`}>🍜 점심</div>
            <div className={styles.detail__desc}>후보 : 우동 / 라멘</div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>14:00</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>🛍️ 긴자 쇼핑</div>
            <div className={styles.detail__spot}>
              <FoldInfo info={ginzaSix} title="긴자식스 GINZA SIX" />
              <FoldInfo info={uniqlo} title="유니클로 긴자점 ユニクロ 銀座店" />
              <FoldInfo info={kuya} title="쿠야 空也" />
              <FoldInfo info={itoya} title="이토야 문구 伊東屋" />
              <FoldInfo info={kimuraya} title="기무라야 木村家" />
              <FoldInfo info={loft} title="로프트 긴자 ロフト" />
              <FoldInfo info={brands} title="각종 브랜드 매장" overview={true} cluster={brandCluster} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
