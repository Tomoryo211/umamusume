"use client";

import Image from "next/image";
import styles from "./Modal.module.scss";
import { Character } from "../Display/Display";

type Props = {
    character: Character;
    onClose: () => void;
};

export default function Modal({ character, onClose }: Props) {
    return (
        <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={400}
            />
            <h2>{character.name}</h2>
            <p>ここにキャラの詳細説明を書くペン</p>

            <button onClick={onClose}>閉じる</button>
        </div>
        </div>
    );
}
