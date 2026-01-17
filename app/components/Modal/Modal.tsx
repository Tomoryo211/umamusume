"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Modal.module.scss";
import VanillaTilt from "vanilla-tilt";
import { Character } from "../Display/Display";

type Props = {
    character: Character;
    onClose: () => void;
};

export default function Modal({ character, onClose }: Props) {
    const tiltRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!tiltRef.current) return;

        VanillaTilt.init(tiltRef.current, {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.25,
        });

    return () => {
        tiltRef.current?.vanillaTilt?.destroy();
    };
}, []);

    return (
        <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}ref={tiltRef}
        >
            <div className={styles.modalImageWrap}>
            <Image
                src={character.image}
                alt={character.name}
                width={300}
                height={400}
                className={styles.modalImage}
            />
            </div>

            <h2>{character.name}</h2>
            <p>みんな元気</p>

            <button onClick={onClose} className={styles.btn}>閉じる</button>
        </div>
        </div>
    );
}
