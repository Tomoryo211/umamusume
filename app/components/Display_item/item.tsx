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
import { kill } from "process";



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
                <Image src={Vibr} className={style.image} alt="ヴィブロス"/>
                <Image src={Virsn} className={style.image} alt="ヴィルシーナ"/>
                <Image src={Uin} className={style.image} alt="ウインヴァリアシオン"/>
                <Image src={Vodka} className={style.image} alt="ウォッカ"/>
            </div>
            <div className={style.set}>
                <Image src={Eisin} className={style.image} alt="ヴィブロス"/>
                <Image src={Oguri} className={style.image} alt="ヴィルシーナ"/>
                <Image src={Orfe} className={style.image} alt="ウインヴァリアシオン"/>
                <Image src={Katuragi} className={style.image} alt="ウォッカ"/>
            </div>
            <div className={style.set}>
                <Image src={Karen} className={style.image} alt="ヴィブロス"/>
                <Image src={Kitasan} className={style.image} alt="ヴィルシーナ"/>
                <Image src={Siti} className={style.image} alt="ウインヴァリアシオン"/>
                <Image src={Kopano} className={style.image} alt="ウォッカ"/>
            </div>
            <div className={style.set}>
                <Image src={Sairen} className={style.image} alt="ヴィブロス"/>
                <Image src={Sakura} className={style.image} alt="ヴィルシーナ"/>
                <Image src={SatonoK} className={style.image} alt="ウインヴァリアシオン"/>
                <Image src={SatanoD} className={style.image} alt="ウォッカ"/>
            </div>
            <div className={style.set}>
                <Image src={Jyent} className={style.image} alt="ヴィブロス"/>
                <Image src={Syuvar} className={style.image} alt="ヴィルシーナ"/>
                <Image src={Sirius} className={style.image} alt="ウインヴァリアシオン"/>
                <Image src={Sthir} className={style.image} alt="ウォッカ"/>
            </div>
            <div className={style.set}>
                <Image src={Special} className={style.image} alt="ヴィブロス"/>
                <Image src={Super} className={style.image} alt="ヴィルシーナ"/>
                <Image src={Sumat} className={style.image} alt="ウインヴァリアシオン"/>
                <Image src={Zenno} className={style.image} alt="ウォッカ"/>
            </div>
            <div className={style.set}>
                <Image src={Seiun} className={style.image} alt="ヴィブロス"/>
                <Image src={Daitak} className={style.image} alt="ヴィルシーナ"/>
                <Image src={Daiwa} className={style.image} alt="ウインヴァリアシオン"/>
                <Image src={Dant} className={style.image} alt="ウォッカ"/>
            </div>
            <div className={style.set}>
                <Image src={Taiki} className={style.image} alt="ヴィブロス"/>
                <Image src={Tamamo} className={style.image} alt="ヴィルシーナ"/>
                <Image src={Tuin} className={style.image} alt="ウインヴァリアシオン"/>
                <Image src={Dearing} className={style.image} alt="ウォッカ"/>
            </div>
            <div className={style.set}>
                <Image src={Dhuran} className={style.image} alt="ヴィブロス"/>
                <Image src={Mente} className={style.image} alt="ヴィルシーナ"/>
                <Image src={Dream} className={style.image} alt="ウインヴァリアシオン"/>
                <Image src={Teio} className={style.image} alt="ウォッカ"/>
            </div>
            <div className={style.set}>
                <Image src={Tousen} className={style.image} alt="ヴィブロス"/>
                <Image src={Toran} className={style.image} alt="ヴィルシーナ"/>
                <Image src={Nice} className={style.image} alt="ウインヴァリアシオン"/>
                <Image src={Neo} className={style.image} alt="ウォッカ"/>
            </div>
            <div className={style.set}>
                <Image src={Urara} className={style.image} alt="ヴィブロス"/>
                <Image src={Mirakuru} className={style.image} alt="ヴィルシーナ"/>
                <Image src={Buena} className={style.image} alt="ウインヴァリアシオン"/>
                <Image src={Fain} className={style.image} alt="ウォッカ"/>
            </div>
            <div className={style.set}>
                <Image src={Pandor} className={style.image} alt="ヴィブロス"/>
                <Image src={Kiseki} className={style.image} alt="ヴィルシーナ"/>
                <Image src={Oso} className={style.image} alt="ウインヴァリアシオン"/>
                <Image src={Tarumae} className={style.image} alt="ウォッカ"/>
            </div>
            <div className={style.set}>
                <Image src={Matikane} className={style.image} alt="ヴィブロス"/>
                <Image src={Mayano} className={style.image} alt="ヴィルシーナ"/>
                <Image src={Maruzen} className={style.image} alt="ウインヴァリアシオン"/>
                <Image src={Sibi} className={style.image} alt="ウォッカ"/>
            </div>
            <div className={style.set}>
                <Image src={Mihono} className={style.image} alt="ヴィブロス"/>
                <Image src={Arudan} className={style.image} alt="ヴィルシーナ"/>
                <Image src={Brait} className={style.image} alt="ウインヴァリアシオン"/>
                <Image src={Mac} className={style.image} alt="ウォッカ"/>
            </div>
        </>
    )
}