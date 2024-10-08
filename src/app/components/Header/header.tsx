'use client'
import React from 'react';
import styles from './header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setSideBarShow} from "../../../../store/headerSlice";

function Header() {
    const dispatch = useDispatch();
    const sideBarShow = useSelector(state => state.headerReducer.sideBarShow);
    const iconClick = () => {
        console.log(sideBarShow)
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
                    사이드바
                </div> }
        </div>
    );
}

export default Header;
