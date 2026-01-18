
"use client";

import { useState } from "react";
import Item from "../Display_item/Item";
import Modal from "../Modal/Modal";

export type Character = {
    name: string;
    image: any;
};

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



const characters: Character[] = [
    { name: "アグネスタキオン", image: Agunes },
    { name: "アイネスフウジン", image: Aines },
    { name: "アストンマーチャン", image: Aston },
    { name: "イクノディクタス", image: Ikuno },
    { name: "ヴィブロス", image: Vibr },
    { name: "ヴィルシーナ", image: Virsn },
    { name: "ウインバリアシオン", image: Uin },
    { name: "ウォッカ", image: Vodka },
    { name: "エイシンフラッシュ", image: Eisin },
    { name: "オグリキャップ", image: Oguri },
    { name: "オルフェーヴル", image: Orfe },
    { name: "カツラギエース", image: Katuragi },
    { name: "カレンチャン", image: Karen },
    { name: "キタサンブラック", image: Kitasan },
    { name: "ゴールドシチー", image: Siti },
    { name: "コパノリッキー", image: Kopano },
    { name: "サイレンススズカ", image: Sairen },
    { name: "サクラチヨノオー", image: Sakura },
    { name: "サトノクラウン", image: SatonoK },
    { name: "サトノダイヤモンド", image: SatanoD },
    { name: "ジェンティルドンナ", image: Jyent },
    { name: "シュヴァルグラン", image: Syuvar },
    { name: "シリウスシンボリ", image: Sirius },
    { name: "スティルインラブ", image: Sthir },
    { name: "スペシャルウィーク", image: Special },
    { name: "スマートファルコン", image: Sumat },
    { name: "スーパークリーク", image: Super },
    { name: "ゼンノロブロイ", image: Zenno },
    { name: "セイウンスカイ", image: Seiun },
    { name: "ダイタクヘリオス", image: Daitak },
    { name: "ダイワスカーレット", image: Daiwa },
    { name: "ダンツフレーム", image: Dant },
    { name: "タイキシャトル", image: Taiki },
    { name: "タマモクロス", image: Tamamo },
    { name: "ツインターボ", image: Tuin },
    { name: "デアリングタクト", image: Dearing },
    { name: "デュランダル", image: Dhuran },
    { name: "ドゥラメンテ", image: Mente },
    { name: "ドリームジャーニー", image: Dream },
    { name: "トウカイテイオー", image: Teio },
    { name: "トウセンジョーダン", image: Tousen },
    { name: "トランセンド", image: Toran },
    { name: "ナイスネイチャ", image: Nice },
    { name: "ネオユニヴァース", image: Neo },
    { name: "ハルウララ", image: Urara },
    { name: "ヒシミラクル", image: Mirakuru },
    { name: "ブエナビスタ", image: Buena },
    { name: "ファインモーション", image: Fain },
    { name: "フサイチパンドラ", image: Pandor },
    { name: "フジキセキ", image: Kiseki },
    { name: "フリオーソ", image: Oso },
    { name: "ホッコータルマエ", image: Tarumae },
    { name: "マチカネタンホイザ", image: Matikane },
    { name: "マヤノトップガン", image: Mayano },
    { name: "マルゼンスキー", image: Maruzen },
    { name: "ミスターシービー", image: Sibi },
    { name: "ミホノブルボン", image: Mihono },
    { name: "メジロアルダン", image: Arudan },
    { name: "メジロブライト", image: Brait },
    { name: "メジロマックイーン", image: Mac },
];

export default function Display() {
    const [selectedChar, setSelectedChar] = useState<Character | null>(null);

    return (
        <>
        <Item
            characters={characters}
            onSelect={(char) => setSelectedChar(char)}
        />

        {selectedChar && (
            <Modal
            character={selectedChar}
            onClose={() => setSelectedChar(null)}
            />
        )}
        </>
    );
}
