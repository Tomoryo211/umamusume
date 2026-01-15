
"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import Item from "../Display_item/Item";
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

const characters = [
    { name: "アグネスタキオン", src: Agunes },
    { name: "アイネスフウジン", src: Aines },
    { name: "アストンマーチャン", src: Aston },
    { name: "イクノディクタス", src: Ikuno },
    { name: "ヴィブロス", src: Vibr },
    { name: "ヴィルシーナ", src: Virsn },
    { name: "ウインバリアシオン", src: Uin },
    { name: "ウォッカ", src: Vodka },
    { name: "エイシンフラッシュ", src: Eisin },
    { name: "オグリキャップ", src: Oguri },
    { name: "オルフェーヴル", src: Orfe },
    { name: "カツラギエース", src: Katuragi },
    { name: "カレンチャン", src: Karen },
    { name: "キタサンブラック", src: Kitasan },
    { name: "ゴールドシチー", src: Siti },
    { name: "コパノリッキー", src: Kopano },
    { name: "サイレンススズカ", src: Sairen },
    { name: "サクラチヨノオー", src: Sakura },
    { name: "サトノクラウン", src: SatonoK },
    { name: "サトノダイヤモンド", src: SatanoD },
    { name: "ジェンティルドンナ", src: Jyent },
    { name: "シュヴァルグラン", src: Syuvar },
    { name: "シリウスシンボリ", src: Sirius },
    { name: "スティルインラブ", src: Sthir },
    { name: "スペシャルウィーク", src: Special },
    { name: "スマートファルコン", src: Sumat },
    { name: "スーパークリーク", src: Super },
    { name: "ゼンノロブロイ", src: Zenno },
    { name: "セイウンスカイ", src: Seiun },
    { name: "ダイタクヘリオス", src: Daitak },
    { name: "ダイワスカーレット", src: Daiwa },
    { name: "ダンツフレーム", src: Dant },
    { name: "タイキシャトル", src: Taiki },
    { name: "タマモクロス", src: Tamamo },
    { name: "ツインターボ", src: Tuin },
    { name: "デアリングタクト", src: Dearing },
    { name: "デュランダル", src: Dhuran },
    { name: "ドゥラメンテ", src: Mente },
    { name: "ドリームジャーニー", src: Dream },
    { name: "トウカイテイオー", src: Teio },
    { name: "トウセンジョーダン", src: Tousen },
    { name: "トランセンド", src: Toran },
    { name: "ナイスネイチャ", src: Nice },
    { name: "ネオユニヴァース", src: Neo },
    { name: "ハルウララ", src: Urara },
    { name: "ヒシミラクル", src: Mirakuru },
    { name: "ブエナビスタ", src: Buena },
    { name: "ファインモーション", src: Fain },
    { name: "フサイチパンドラ", src: Pandor },
    { name: "フジキセキ", src: Kiseki },
    { name: "フリオーソ", src: Oso },
    { name: "ホッコータルマエ", src: Tarumae },
    { name: "マチカネタンホイザ", src: Matikane },
    { name: "マヤノトップガン", src: Mayano },
    { name: "マルゼンスキー", src: Maruzen },
    { name: "ミスターシービー", src: Sibi },
    { name: "ミホノブルボン", src: Mihono },
    { name: "メジロアルダン", src: Arudan },
    { name: "メジロブライト", src: Brait },
    { name: "メジロマックイーン", src: Mac },
];

export default function Display() {
    const tiltRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        tiltRefs.current.forEach((el) => {
        if (!el) return;

        VanillaTilt.init(el, {
            max: 15,
            speed: 400,
            glare: false,
            scale: 1,
        });
        });
    }, []);

    return <Item characters={characters} tiltRefs={tiltRefs} />;
}
