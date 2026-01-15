import Item from "../Display_item/Item";
import Styles from "./Display.module.scss";


export default function Display_item(){
    return(
        <>
            <div className={Styles.About}>
                <p className={Styles.aboutitem}>ここからキャラ紹介を始める</p>
                <div className={Styles.set}>
                    <Item />
                </div>
            </div>
        </>
    )
}