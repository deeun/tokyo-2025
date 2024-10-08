'use client'
import styles from "./page.module.css";
import {useEffect, useState} from "react";

export default function Home() {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true);
        localStorage.clear();
    }, []);
  return (
      <>
          {
          isClient ?
              <div className={styles.main__wrap}>
                  메인
              </div>
              :
              <div></div>
      }
      </>
  );
}
