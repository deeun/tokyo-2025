'use client'
import React from 'react';
import styles from './header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setSideBarShow} from "../../../../store/headerSlice";

function Header() {
    const dispatch = useDispatch();
    const sideBarShow = useSelector(state => state.headerReducer.sideBarShow);
    const iconClick = () => {
        dispatch(setSideBarShow(!sideBarShow))
    }

    return (
        <div className={`${styles.header__wrap}`}>
            <div className={'fx-space-between w100 h100'}>
                <div className={`ft-jp ${styles.header__title} bold`} style={{fontFamily: 'EF_YOONY'}}>
                    도 쿄 여 행
                </div>
                <div className={styles.header__title} onClick={iconClick}>
                    <img src={'/icon/menu.png'} alt={''} width={20}/>
                </div>
            </div>
            { sideBarShow &&
                <div className={styles.side__bar}>
                    <div className={styles.side__bar_item}>개요</div>
                    <div className={styles.side__bar_item}>day 1</div>
                    <div className={styles.side__bar_item}>day 2</div>
                    <div className={styles.side__bar_item}>day 3</div>
                    <div className={styles.side__bar_item}>day 4</div>
                    <div className={styles.side__bar_item}>day 5</div>
                </div> }
        </div>
    );
}

export default Header;
