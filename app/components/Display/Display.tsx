import Item from "../Display_item/Item";
import Styles from "./Display.module.scss";

export default function Display_item(){
    return(
        <>
            <div className={Styles.name}>
                <h1>名前</h1>
                <h2>タイトル</h2>
            </div>
            <div className={Styles.About}>
                <p className={Styles.aboutitem}>ここからキャラ紹介を始める</p>
            </div>
        </>
    )
}