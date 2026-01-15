import Image from "next/image";
import Agunes from "../../image/アブネスタキオン.png";
import styles from "./Item.mudule.scss";

export default function Item (){
    return(
        <>
            <div>
                <h1>アグネスタキオン</h1>
                    <Image src={Agunes} className={styles.image} alt="アグネスタキオン" width={100} height={100}/>
                <p>キャラクターの説明文</p>
            </div>
        </>
    )
}