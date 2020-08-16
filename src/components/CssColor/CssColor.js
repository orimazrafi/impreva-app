import React from 'react';
import style from "./style.module.scss"
export const CssColor = (props) => {
    return (
        <div className={style.css_colors_container}>
            <div className={style.first_card_wrapper} >
                <div className={style.card_wrapper} style={{ background: "red" }}>
                </div>
            </div>
            <div className={style.second_card_wrapper} >
                <div className={style.card_wrapper}
                    style={{ background: "blue" }}>
                </div>
            </div>
        </div >)
}