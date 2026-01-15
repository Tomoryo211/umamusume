import Agunes from "../../image/アブネスタキオン.png";
import Aines from "../../image/アイネスフウジン.png";
import Aston from "../../image/アストンマーチャン.png";
import Ikuno from "../../image/イクノディクタス.png";
import Vibr from "../../image/ヴィブロス.png";
import Virsn from "../../image/ヴィルシーナ.png";
import Uin from "../../image/ウインバリアシオン.png";
import Vodka from "../../image/ウォッカ.png";
import Eisin from "../../image/エイシンフラッシュ.png";
import Oguri from "../../image/オグリキャップ.png";
import Orfe from "../../image/オルフェーブル.png";
import Katuragi from "../../image/カツラギエース.png";
import Karen from "../../image/カレンちゃん.png";
import Kitasan from "../../image/キタサンブラック.png";
import Siti from "../../image/ゴールドシチー.png";
import Kopano from "../../image/コバノリッキー.png";
import Sairen from "../../image/サイレンススズカ.png";
import Sakura from "../../image/サクラチヨノオー.png";
import SatonoK from "../../image/サトノクラウン.png";
import SatanoD from "../../image/サトノダイヤモンド.png";
import Jyent from "../../image/ジェンティルドンナ.png";
import Syuvar from "../../image/シュヴァルグラン.png";
import Sirius from "../../image/シリウスシンボリ.png";
import Sthir from "../../image/スティルインラブ.png";
import Special from "../../image/スペシャルウィーク.png";
import Sumat from "../../image/スマートファルコ.png";
import Super from "../../image/スーパークリーク.png";
import Zenno from "../../image/ゼンノロブロイ.png";
import Seiun from "../../image/セイウンスカイ.png";
import Daitak from "../../image/ダイタクヘリオス.png";
import Daiwa from "../../image/ダイワスカーレット.png";
import Dant from "../../image/ダンツフレーム.png";
import Taiki from "../../image/タイキシャトル.png";
import Tamamo from "../../image/タマモクロス.png";
import Tuin from "../../image/ツインターボ.png";
import Dearing from "../../image/デアリングタクト.png";
import Dhuran from "../../image/デュランダル.png";
import Mente from "../../image/ドュラメンテ.png";
import Dream from "../../image/ドリームジャーニー.png";
import Teio from "../../image/トウカイテイオー.png";
import Tousen from "../../image/トウセンジョーダン.png";
import Toran from "../../image/トランセンド.png";
import Nice from "../../image/ナイスネイチャ.png";
import Neo from "../../image/ネオユニヴァース.png";
import Urara from "../../image/ハルウララ.png";
import Mirakuru from "../../image/ヒシミラクル.png";
import Buena from "../../image/ブエナビスタ.png";
import Fain from "../../image/ファインモーション.png";
import Pandor from "../../image/フサイチパンドラ.png";
import Kiseki from "../../image/フジキセキ.png";
import Oso from "../../image/フリオーソ.png";
import Tarumae from "../../image/ホッコータルマエ.png";
import Matikane from "../../image/マチカネタンホイザ.png";
import Mayano from "../../image/マヤノトップガン.png";
import Maruzen from "../../image/マルゼンスキー.png";
import Sibi from "../../image/ミスターシービー.png";
import Mihono from "../../image/ミホノブルボン.png";
import Arudan from "../../image/メジロアルダン.png";
import Brait from "../../image/メジロブライト.png";
import Mac from "../../image/メジロマックイーン.png";
import Image from "next/image";
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