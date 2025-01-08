"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [mapKey, setMapKey] = useState("");
  const [tokyoHotelShow, setTokyoHotelShow] = useState(false);
  const [yokoHotelShow, setYokoHotelShow] = useState(false);
  useEffect(() => {
    setIsClient(true);
    localStorage.clear();
    setMapKey(process.env.NEXT_PUBLIC_MAP_KEY);
  }, [mapKey]);
  const router = useRouter();
  const dateClick = (day: number) => {
    router.push(`/detail/day${day}`);
  };

  return (
    <>
      {isClient ? (
        <div className={"main__wrap"}>
          <div className={styles.section__wrap}>
            <div className={"mg-bottom-10 bold"}>✈️️ 출입국 정보</div>
            <div className={""}>
              <div className={"fs-12 ft_999 h100"}>대한항공 KE2101</div>
              <div className={"fx h100 mg-top-4"}>
                <div className={"bold mg-right-5"}>출국</div>
                <div>25/01/18(토)</div>
              </div>
              <div className={"fx-space-between mg-top-10"}>
                <div className={"fx-column-center"} style={{ width: "85px" }}>
                  서울(인천)
                  <div className={"fs-14 mg-top-4"}>09:00</div>
                </div>
                <div>➡︎︎</div>
                <div className={"fx-column-center"} style={{ width: "85px" }}>
                  도쿄(하네다)
                  <div className={"fs-14 mg-top-4"}>11:05</div>
                </div>
              </div>
            </div>
            <div className={"mg-top-20"}>
              <div className={"fs-12 ft_999 h100"}>대한항공 KE2104</div>
              <div className={"fx h100 mg-top-4"}>
                <div className={"bold mg-right-5"}>입국</div>
                <div>25/01/22(수)</div>
              </div>
              <div className={"fx-space-between mg-top-10"}>
                <div className={"fx-column-center"} style={{ width: "85px" }}>
                  도쿄(하네다)
                  <div className={"fs-14 mg-top-4"}>19:50</div>
                </div>
                <div>➡︎︎</div>
                <div className={"fx-column-center"} style={{ width: "85px" }}>
                  서울(인천)
                  <div className={"fs-14 mg-top-4"}>22:25</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section__wrap}>
            <div className="fx-space-between">
              <div className={"bold"}>🏠️ 숙박 정보</div>
              <div className={styles.show__desc}>상세정보 ▶︎ 클릭 !</div>
            </div>
            <div>
              <div className={"mg-top-20"}>
                <div
                  className={"bold"}
                  onClick={() => setTokyoHotelShow(!tokyoHotelShow)}
                >
                  <span>{tokyoHotelShow ? "▼ " : "▶︎ "}︎</span>도쿄 (3박)
                </div>
                {tokyoHotelShow && (
                  <div>
                    <div className={"ft-jp"}>
                      Rem Plus Ginza (レムプラス銀座)
                    </div>
                    <div className={"fs-14"}>￥ 81,700 (현장지불)</div>
                    <div className={"ft-jp fs-12 ft_999 mg-top-5"}>
                      東京都中央区銀座８-11-11
                    </div>
                    <div className={"fs-12 ft_999"}>03-6866-0606</div>
                    <iframe
                      width="100%"
                      style={{ border: "none" }}
                      height="150"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=rem+plus+Ginza,Tokyo+JP`}
                    ></iframe>
                  </div>
                )}
              </div>

              <div className={"mg-top-20"}>
                <div
                  className={"bold"}
                  onClick={() => setYokoHotelShow(!yokoHotelShow)}
                >
                  <span>{yokoHotelShow ? "▼ " : "▶︎ "}︎</span>요코하마 (1박)
                </div>
                {yokoHotelShow && (
                  <div>
                    <div className={"ft-jp"}>
                      Yokohama Bay Hotel Tokyu
                      <br />
                      (横浜ベイホテル東急)
                    </div>
                    <div className={"fs-14"}>￥ 15,500 (현장지불)</div>
                    <div className={"ft-jp fs-12 ft_999 mg-top-5"}>
                      神奈川県横浜市西区みなとみらい２丁目３−７
                    </div>
                    <div className={"fs-12 ft_999"}>045-682-2222</div>
                    <iframe
                      width="100%"
                      style={{ border: "none" }}
                      height="150"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=yokohama+bay+hotel+tokyu,Kanagawa+JP`}
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.section__wrap}>
            <div className={"bold mg-bottom-20"}>📅 일정 요약</div>
            <div className={styles.calendar__wrap}>
              <div className={`${styles.calendar__block} ${styles.bd_left}`}>
                13
              </div>
              <div className={styles.calendar__block}>14</div>
              <div className={styles.calendar__block}>15</div>
              <div className={styles.calendar__block}>16</div>
              <div className={styles.calendar__block}>17</div>
              <div className={`jp-bold ${styles.calendar__block}`} onClick={() => dateClick(1)}>
                18(土)
                <div className={`mg-top-4 ${styles.calendar__detail}`}>
                  긴자
                </div>
                <div className={styles.calendar__detail}>도쿄역</div>
              </div>
              <div className={`jp-bold ${styles.calendar__block}`} onClick={() => dateClick(2)}>
                19(日)
                <div className={`mg-top-4 ${styles.calendar__detail}`}>
                  우에노(미술관)
                </div>
              </div>
            </div>
            <div className={styles.calendar__wrap}>
              <div
                className={`jp-bold ${styles.calendar__block__bottom} ${styles.bd_left}`}
                onClick={() => dateClick(3)}
              >
                20(月)
                <div className={`mg-top-4 ${styles.calendar__detail}`}>
                  시부야
                </div>
                <div className={styles.calendar__detail}>오모테산도</div>
              </div>
              <div className={`jp-bold ${styles.calendar__block__bottom}`} onClick={() => dateClick(4)}>
                21(火)
                <div className={`mg-top-4 ${styles.calendar__detail}`}>
                  요코하마
                </div>
              </div>
              <div className={`jp-bold ${styles.calendar__block__bottom}`} onClick={() => dateClick(5)}>
                22(水)
                <div className={`mg-top-4 ${styles.calendar__detail}`}>
                  요코하마
                </div>
              </div>
              <div className={styles.calendar__block__bottom}>23</div>
              <div className={styles.calendar__block__bottom}>24</div>
              <div className={styles.calendar__block__bottom}>25</div>
              <div className={styles.calendar__block__bottom}>26</div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
