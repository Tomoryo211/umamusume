import Image from "next/image";
import Agunes from "../../image/アブネスタキオン.png";
import Aines from "../../image/アイネスフウジン.png";
import Aston from "../../image/アストンマーチャン.png";
import Ikuno from "../../image/イクノディクタス.png";
import style from "./Item.module.scss";



export default function Item (){
    return(
        <>
            <div className={style.set}>
                <Image src={Agunes} className={style.image} alt="アグネスタキオン"/>
                <Image src={Aines} className={style.image} alt="アイネスフウジン"/>
                <Image src={Aston} className={style.image} alt="アストンマーちゃん"/>
                <Image src={Ikuno} className={style.image} alt="イクノディスタス"/>
            </div>
            <div className={style.set}>
                <Image src={Agunes} className={style.image} alt="アグネスタキオン"/>
                <Image src={Aines} className={style.image} alt="アイネスフウジン"/>
                <Image src={Aston} className={style.image} alt="アストンマーちゃん"/>
                <Image src={Ikuno} className={style.image} alt="イクノディスタス"/>
            </div>
        </>
    )
}