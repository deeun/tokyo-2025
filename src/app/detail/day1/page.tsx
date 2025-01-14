"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../detail.module.css";
import FoldInfo from "@/app/components/FoldInfo/foldInfo";
import Map from "@/app/components/Map/map";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../../store/loadingSlice";

function Page() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(false));
  }, []);
  const ginzaSix = {
    title: "긴자 식스",
    contents: "250개의 브랜드 매장이 입점한 긴자 최대 규모의 복합 쇼핑몰.",
    url: "https://ginza6.tokyo.e.abf.hp.transer.com/shops/",
    hours: "10:30 - 20:30",
    position: { lat: 35.66993134597202, lng: 139.76411543563123 },
  };
  const uniqlo = {
    title: "유니클로 긴자점",
    contents: "1 ~ 12층까지 건물 전체가 유니클로.",
    url: "",
    hours: "11:00 - 21:00",
    position: { lat: 35.67045482297614, lng: 139.76347106667262 },
  };
  const kuya = {
    title: "空也 ginza",
    contents: "1891 설립 후 3대 째 운영 중. 모나카가 제일 유명하다.",
    url: "",
    position: { lat: 35.671015152721445, lng: 139.76280290530107 },
    hours: "10:00 - 16:00",
  };
  const itoya = {
    title: "이토야 문구 긴자점",
    contents:
      "1904년 창업한 전13층의 대규모 문구 전문점. 본점인 G.Itoya와, 길 건너편 고급 필기구 전문 매장인 K.Itoya 매장으로 구분.",
    url: "https://www.ito-ya.co.jp/ext/store/ginza/ginza/index.html#event",
    position: { lat: 35.67332996129044, lng: 139.76724841368667 },
    hours: "10:00 - 20:00",
  };
  const kimuraya = {
    title: "긴자기무라야 긴자본점",
    contents: "1869년 설립. 세계 최초로 단팥빵이 탄생한 곳.",
    url: "",
    position: { lat: 35.67187728723715, lng: 139.76520625774572 },
    hours: "10:00 - 20:00",
  };
  const loft = {
    title: "긴자 로프트",
    contents: "화장품 및 잡화 매장",
    url: "",
    position: { lat: 35.67414654162956, lng: 139.76643366760655 },
    hours: "11:00 - 21:00 (일 20:00)",
  };
  const mitsukoshi = {
    title: "니혼바시 미츠코시 본점",
    contents:
      "1914년 오픈한 일본 최초의 백화점. 1935년에 지어진 르네상스 양식의 건물로 유명하다.",
    url: "https://www.mistore.jp.k.az.hp.transer.com/store/nihombashi.html",
    position: { lat: 35.68582488652542, lng: 139.7734081383735 },
    hours: "10:00 - 19:00 (구역별 상이)",
  };
  const takashimaya = {
    title: "日本橋高島屋S.C.",
    contents:
      "본관, 동관, 신관, 워치메종 4개의 구역으로 구성. 1933년에 지어진 본관은 중요 문화재로 지정되어 건축 초기의 분위기가 남아있다.",
    url: "https://www.takashimaya-global.com/en/stores/nihombashi/",
    position: { lat: 35.68100981469591, lng: 139.77351947516948 },
    hours: "10:30 - 19:30 (구역별 상이)",
  };
  const brands = {
    contents: "",
    url: "",
    hours: "매장별 확인 필요",
  };
  const brandCluster = [
    {
      title: "에르메스 긴자",
      position: { lat: 35.67220270841222, lng: 139.76351396445938 },
      hours: "11:00 - 19:00",
    },
    {
      title: "몽클레어 긴자",
      keyword: "Moncler Ginza FSS",
      position: { lat: 35.67390703501073, lng: 139.76716649666173 },
      hours: "11:00 - 20:00",
    },
    {
      title: "몽클레어 긴자 우먼",
      keyword: "モンクレール 東京 松屋銀座ウィメンズ店",
      position: { lat: 35.67238207461945, lng: 139.76666059178848 },
      hours: "11:00 - 20:00",
    },
    {
      title: "까르띠에 긴자",
      keyword: "Cartier Ginza カルティエ銀座ブティック",
      position: { lat: 35.67344430727107, lng: 139.76670139340388 },
      hours: "11:00 - 19:00",
    },
    {
      title: "sacai 미츠코시긴자",
      position: { lat: 35.67149779807367, lng: 139.7656136168124 },
      hours: "10:00 - 20:00",
    },
  ];

  return (
    <div className={styles.detail__wrap}>
      <div className={styles.detail__title}>
        1월 18일 일요일
        <span className={styles.detail__title_desc}> ( 1 / 5 )</span>
      </div>
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
              <FoldInfo info={ginzaSix} title="긴자식스|GINZA SIX" />
              <FoldInfo info={uniqlo} title="유니클로 긴자점|ユニクロ 銀座店" />
              <FoldInfo info={kuya} title="쿠야|空也" />
              <FoldInfo info={itoya} title="이토야 문구|伊東屋" />
              <FoldInfo info={kimuraya} title="기무라야|木村家" />
              <FoldInfo info={loft} title="로프트 긴자|ロフト" />
              <FoldInfo
                info={brands}
                title="각종 브랜드 매장"
                overview={true}
                cluster={brandCluster}
              />
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>**:**</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>✨ BONUS</div>
            <div className={styles.detail__spot}>
              <FoldInfo
                info={mitsukoshi}
                title="미츠코시 본점|日本橋三越本店"
              />
              <FoldInfo
                info={takashimaya}
                title="타카시마야 니혼바시|日本橋高島屋"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
