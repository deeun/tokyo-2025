'use client'
import React from 'react';
import styles from './footer.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setWordBalloonShow} from "../../../../store/headerSlice";

function Footer() {
    const dispatch = useDispatch();
    // const capyShow = useSelector(state => state.headerReducer.capybaraShow)
    const balloonShow = useSelector(state => state.headerReducer.wordBalloonShow)

    const balloonClick = () => {
        dispatch(setWordBalloonShow(false))
    }
    return (
        <div className={styles.footer__wrap}>
            <div className={styles.footer__contents_wrap}>
                { balloonShow &&
                    <div className={styles.word_balloon__container} onClick={balloonClick}>궁금한게 있으면 클릭bara</div>
                }
                <div className={styles.capy__wrap}>
                    {/*<img src={'/img/capy_balloon_bg_removed.png'} alt={''} width={'100%'} />*/}
                    <img src={'/img/capybara.png'} alt={''} width={'120px'}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
