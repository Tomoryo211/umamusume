import Image from "next/image";
import Logo from "../../image/ウマ娘　ロゴ.png";
import styles from "./Header.module.scss";

export default function Header () {
    return(
        <div className={styles.header}>
            <Image src={Logo} alt="ウマ娘のロゴ" width={110} height={110} className={styles.Logo}/>
        </div>
    )
}