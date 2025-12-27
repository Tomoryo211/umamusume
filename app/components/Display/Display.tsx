import Item from "../Display_item/Item";
import Styles from "./Display.module.scss";

export default function Display_item(){
    return(
        <div>
            <h1>名前</h1>
            <h2>タイトル</h2>
            <p className={Styles.about}>ここからキャラ紹介を始める</p>
        </div>
    )
}