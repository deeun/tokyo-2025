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
  const park = {
    title: "元町公園",
    contents: "공원 내부에 야마테 서양관 등 여러 구경거리가 있다.",
    url: "",
    hours: "-",
    position: { lat: 35.438277641252455, lng: 139.65136502280953 },
  };

  const shoppingStreet = {
    title: "요코하마 모토마치 쇼핑 스트리트",
    contents:
      "1859년 개항 당시 항구 가까이에 위치한 모토마치로 서양의 문물이 밀려 들어오며 형성된 거리.",
    url: "https://www.motomachi.or.jp/",
    hours: "가게 별로 상이",
    position: { lat: 35.44023105105096, lng: 139.6476383035533 },
  };

  const chinatown = {
    title: "요코하마 차이나타운",
    contents:
      "일본 내 최대의 차이나타운. 약 250개 이상의 상점과 식당이 있다. 야경으로도 유명하다.",
    url: "https://www.chinatown.or.jp/",
    hours: "-",
    position: { lat: 35.44365242013269, lng: 139.6461098596578 },
  };

  const akarenga = {
    title: "요코하마 아카렌가소코 2호관",
    contents: "1913년에 완성된 항만용 창고. 2002년부터는 1호관은 전시공간으로, 2호관은 레스토랑과 숍이 들어서면서 있다. 야경으로도 유명.",
    url: "",
    hours: "11:00 - 20:00",
    position: { lat: 35.66102057462169, lng: 139.6997337027171 },
  };
  const cosmo = {
    title: "요코하마 코스모월드",
    contents: "1989년부터 운영한 거대 관람차로 유명한 놀이공원.",
    url: "http://cosmoworld.jp/",
    hours: "11:00 - 20:00",
    position: { lat: 35.45537047453743, lng: 139.63696387493542 },
  };

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
        1월 21일 화요일
        <span className={styles.detail__title_desc}> ( 4 / 5 )</span>
      </div>
      <div className="mg-top-20">
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time_fixed}>10:00</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>
              🫘 쿠야 모나카 픽업
              <div className={styles.detail__desc}>5박스 예약 완료</div>
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>10:30</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>
              🚊 호텔 체크아웃 / 요코하마로 이동
              <div className={styles.detail__desc}>약 45분 소요</div>
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>11:30</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>
              🏠 호텔 체크인 & 짐맡기기
            </div>
            <div className={`mg-top-14 ${styles.detail__content}`}>🍜 점심</div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>14:00</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>
              🌷 모토마치 구경
              <div className={styles.detail__spot}>
                <FoldInfo info={park} title="모토마치 공원|元町公園" />
                <FoldInfo
                  info={shoppingStreet}
                  title="쇼핑 스트리트|横浜元町ショッピングストリート"
                />
                {/* <FoldInfo info={shoppingStreet} title="모토마치 가볼만한 곳들|" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>17:00</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>
              🥟 요코하마 차이나타운 & 저녁
              <div className={styles.detail__spot}>
                <FoldInfo info={chinatown} title="차이나타운|横浜中華街" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>19:00</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>
              🌃 바닷가 야경 구경
              <div className={styles.detail__spot}>
                <FoldInfo
                  info={akarenga}
                  title="아카렌가 창고|横浜赤レンガ倉庫"
                />
                   <FoldInfo
                  info={cosmo}
                  title="코스모월드|よこはまコスモワールド"
                />
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default Page;
