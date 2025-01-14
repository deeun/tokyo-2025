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
  const ivyPlace = {
    title: "アイヴィープレイス",
    contents:
      "부자 동네 다이칸야마에서 유명한 웨스턴 레스토랑. 팬케이크와 브런치 메뉴가 인기가 많다.",
    url: "https://www.tysons.jp/ivyplace/",
    hours: "08:00 - 23:00",
    position: { lat: 35.64950618255898, lng: 139.6999644541431 },
  };

  const tSite = {
    title: "다이칸야마 티사이트",
    contents:
      "숲 속의 도서관 이라는 컨셉으로 꾸며진 문화 복합 공간. 중심부에 츠타야 북스 서점이 자리하고 있다.",
    url: "https://store.tsite.jp/daikanyama/",
    hours: "07:00 - 23:00",
    position: { lat: 35.64908752267325, lng: 139.69962515931772 },
  };

  const starbucks = {
    title: "스타벅스 리저브 로스터리 도쿄",
    contents:
      "세계에 6개만 있다는 스타벅스 리저브 로스터리. 그 중 한개가 도쿄에 있다. 총 4층, 900평의 축구장 절반에 가까운 매장으로 시애틀, 뉴욕, 상하이, 밀라노에 이어 로스터리 5호점이다.",
    url: "https://www.starbucksreserve.com/locations/tokyo-roastery",
    hours: "07:30 - 22:30",
    position: { lat: 35.64937742462464, lng: 139.692604916607 },
  };

  const scramble = {
    title: "Shibuya Scramble Crossing",
    contents:
      "시부야 스크램블 교차점. 도쿄의 대표적인 랜드마크 중 하나이다. 교차로 주변에는 대형 스크린이 세 군데 설치되어 있으며 광고판도 밀집해 있다.",
    url: "",
    hours: "-",
    position: { lat: 35.65967387668842, lng: 139.70052716472094 },
  };

  const loft = {
    title: "시부야 로프트",
    contents: "도쿄에서 제일 큰 로프트. 지하 1층 ~ 6층으로 이루어져있다.",
    url: "",
    hours: "11:00 - 21:00",
    position: { lat: 35.66102057462169, lng: 139.6997337027171 },
  };

  const ralphCoffee = {
    title: "랄프스 커피 오모테산도",
    contents:
      "랄프로렌에서 운영하는 커피 프랜차이즈. 24년 10월 서울에도 매장이 생겼다.",
    url: "",
    hours: "11:00 - 21:00",
    position: { lat: 35.66812258429072, lng: 139.70729324267302 },
  };
  const omoteHills = {
    title: "오모테산도 힐즈",
    contents:
      "오모테산도는 아트, 건축, 고급 패션의 거리로, 도쿄의 샹젤리제 거리라고도 불린다. 오모테산도의 대표 랜드마크인 오모테산도 힐스는 독특한 내부 구조로 유명한 복합 상업 시설이다.",
    url: "https://www.omotesandohills.com/",
    hours: "11:00 - 20:00",
    position: { lat: 35.6675193811918, lng: 139.7086132160634 },
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
        1월 20일 월요일
        <span className={styles.detail__title_desc}> ( 3 / 5 )</span>
      </div>
      <div className="mg-top-20">
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time_fixed}>09:00</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>
              🥞 브런치 / 다이칸야마 구경
              <div className={styles.detail__spot}>
                <FoldInfo
                  info={ivyPlace}
                  title="아이비 플레이스|アイヴィープレイス"
                />
              </div>
              <div className={styles.detail__spot}>
                <FoldInfo
                  info={tSite}
                  title="다이칸야마 티사이트|代官山 T-SITE"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>11:00</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>
              ☕️ 스타벅스 리저브 로스터리 도쿄
              <div className={styles.detail__spot}>
                <FoldInfo
                  info={starbucks}
                  title="|STARBUCKS RESERVE(R) ROASTERY TOKYO"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time_fixed}>13:00</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>🧘🏻‍♀️ 타이 마사지</div>
            <div className={styles.detail__desc}>
              Thai Traditional 코스 60분
              <div
                className={styles.detail__link}
                onClick={() => openLink("massage")}
              >
                Sri Ayutthaya Thai massage
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>14:00</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>
              🚏 시부야 구경 / 점심
              <div className={styles.detail__spot}>
                <FoldInfo
                  info={scramble}
                  title="스크램블 교차점|渋谷スクランブル交差点"
                />
                <FoldInfo info={loft} title="시부야 로프트|渋谷ロフト" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time}>16:00</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>
              👀 오모테산도 구경
              <div className={styles.detail__spot}>
                <FoldInfo
                  info={ralphCoffee}
                  title="랄프스 커피|ラルフズ コーヒー"
                />
                <FoldInfo info={loft} title="시부야 로프트|渋谷ロフト" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detail__slot}>
          <div className={styles.detail__slot_time_fixed}>19:00</div>
          <div className={styles.detail__slot_contents_wrap}>
            <div className={styles.detail__content}>
              {"🍶 <Kill Bill> 촬영지에서 저녁"}
            </div>
            <div className={styles.detail__desc}>
              곤파치 니시아자부 権八 西麻布
              <br />
              {/* <img src="https://thetraveltester.com/wp-content/uploads/kill-bill-scene-1.jpg.webp" width={150} /> */}
              <div
                className={styles.detail__link}
                onClick={() => openLink("gonpachi")}
              >
                공식 홈페이지
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
