'use client'

import { useState } from "react";
import styles from './helper.module.css'
const Helper = () => {
    const [detailShow, setDetailShow] = useState(false);

    return (
        <div className={styles.helper__wrap}>
            <div>
                <div className={styles.helper} onClick={() => setDetailShow(!detailShow)}>
                    <img src={'/img/question_moss.png'} alt='' width={24} />
                </div>
            </div>
            {detailShow && 
                <div className={styles.helper__contents}>
                    <div>
                        <span className={styles.green_letter}>00:00</span> : 확정 일정</div>
                    <div>00:00 : 변동 가능</div>
                    <div>▶︎ : 클릭해서 상세정보 보기</div>
                </div>
            }
        </div>
    )
}

export default Helper;