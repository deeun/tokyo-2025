'use client'
import styles from "./page.module.css";
import {useEffect, useState} from "react";

export default function Home() {
    const [isClient, setIsClient] = useState(false);
    const [mapKey, setMapKey] = useState('')
    useEffect(() => {
        setIsClient(true);
        localStorage.clear();
        setMapKey(process.env.NEXT_PUBLIC_MAP_KEY);
    }, [mapKey]);
  return (
      <>
          {
          isClient ?
              <div className={styles.main__wrap}>
                  <div className={'mg-top-20'}>
                      <div className={'mg-bottom-10 bold'}>✈️️ 출입국 정보</div>
                      <div className={styles.flight__wrap}>
                          <div className={'fs-12 ft_999 h100'}>
                              제주항공 7C1101
                          </div>
                          <div className={'fx h100 mg-top-4'}>
                              <div className={'medium mg-right-5'}>
                                  출국
                              </div>
                              <div>25/01/18(토)</div>
                          </div>
                          <div className={'fx-space-between mg-top-10'}>
                              <div className={'fx-column-center'} style={{width: '85px'}}>
                                  서울(인천)
                                  <div className={'fs-14 mg-top-4'}>
                                      08:10
                                  </div>
                              </div>
                              <div>
                                  ➡︎︎
                              </div>
                              <div className={'fx-column-center'} style={{width: '85px'}}>
                                  도쿄(나리타)
                                  <div className={'fs-14 mg-top-4'}>
                                      10:35
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className={styles.flight__wrap}>
                          <div className={'fs-12 ft_999 h100'}>
                              제주항공 7C1122
                          </div>
                          <div className={'fx h100 mg-top-4'}>
                              <div className={'medium mg-right-5'}>
                                  입국
                              </div>
                              <div>25/01/22(수)</div>
                          </div>
                          <div className={'fx-space-between mg-top-10'}>
                              <div className={'fx-column-center'} style={{width: '85px'}}>
                                  도쿄(나리타)
                                  <div className={'fs-14 mg-top-4'}>
                                      19:50
                                  </div>
                              </div>
                              <div>
                                  ➡︎︎
                              </div>
                              <div className={'fx-column-center'} style={{width: '85px'}}>
                                  서울(인천)
                                  <div className={'fs-14 mg-top-4'}>
                                      22:50
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className={'mg-top-20 bold'}>🏠️ 숙박 정보</div>
                      <div className={'pd-10'}>
                          <div>
                              <div className={'medium'}>▶︎ 도쿄 (3박)</div>
                              <div className={'ft-jp'}>Rem Plus Ginza (レムプラス銀座)</div>
                              <div className={'fs-14'}>￥ 81,700 (현장지불)</div>
                              <div className={'ft-jp fs-12 ft_999 mg-top-5'}>東京都中央区銀座８-11-11</div>
                              <div className={'fs-12 ft_999'}>03-6866-0606</div>
                          </div>
                          <iframe
                              width="100%"
                              style={{border: 'none'}}
                              height="150"
                              loading="lazy"
                              allowFullScreen
                              referrerPolicy="no-referrer-when-downgrade"
                              src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=rem+plus+Ginza,Tokyo+JP`}>
                          </iframe>


                          <div className={'mg-top-20'}>
                              <div className={'medium'}>▶︎ 요코하마 (1박)</div>
                              <div className={'ft-jp'}>Yokohama Bay Hotel Tokyu<br/>(横浜ベイホテル東急)</div>
                              <div className={'fs-14'}>￥ 15,500 (현장지불)</div>
                              <div className={'ft-jp fs-12 ft_999 mg-top-5'}>神奈川県横浜市西区みなとみらい２丁目３−７</div>
                              <div className={'fs-12 ft_999'}>045-682-2222</div>
                          </div>
                          <iframe
                              width="100%"
                              style={{border: 'none'}}
                              height="150"
                              loading="lazy"
                              allowFullScreen
                              referrerPolicy="no-referrer-when-downgrade"
                              src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=yokohama+bay+hotel+tokyu,Kanagawa+JP`}>
                          </iframe>
                      </div>


                      {/*<div className={'mg-bottom-10'}>일정 요약</div>*/}
                      {/*<div className={styles.calendar__wrap}>*/}
                      {/*    <div className={`${styles.calendar__block} ${styles.bd_left}`}>13</div>*/}
                      {/*    <div className={styles.calendar__block}>14</div>*/}
                      {/*    <div className={styles.calendar__block}>15</div>*/}
                      {/*    <div className={styles.calendar__block}>16</div>*/}
                      {/*    <div className={styles.calendar__block}>17</div>*/}
                      {/*    <div className={`jp-bold ${styles.calendar__block}`}>18(土)</div>*/}
                      {/*    <div className={`jp-bold ${styles.calendar__block}`}>19(日)</div>*/}
                      {/*</div>*/}
                      {/*<div className={styles.calendar__wrap}>*/}
                      {/*    <div className={`jp-bold ${styles.calendar__block__bottom} ${styles.bd_left}`}>20(月)</div>*/}
                      {/*    <div className={`jp-bold ${styles.calendar__block__bottom}`}>21(火)</div>*/}
                      {/*    <div className={`jp-bold ${styles.calendar__block__bottom}`}>22(水)</div>*/}
                      {/*    <div className={styles.calendar__block__bottom}>23</div>*/}
                      {/*    <div className={styles.calendar__block__bottom}>24</div>*/}
                      {/*    <div className={styles.calendar__block__bottom}>25</div>*/}
                      {/*    <div className={styles.calendar__block__bottom}>26</div>*/}
                      {/*</div>*/}
                  </div>
              </div>
              :
              <div></div>
          }
      </>
  );
}
