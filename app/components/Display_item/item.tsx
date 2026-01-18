"use client";

import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";
import styles from "./Item.module.scss";
import { Character } from "../Display/Display";

type Props = {
    characters: Character[];
    onSelect: (char: Character) => void;
};

export default function Item({ characters, onSelect }: Props) {
    const tiltRefs = useRef<(HTMLDivElement | null)[]>([]);

useEffect(() => {
    tiltRefs.current.forEach((el) => {
        if (!el) return;
        VanillaTilt.init(el, {
        max: 15,
        speed: 400,
        glare: false,
        });
    });
}, []);

    return (
        <div className={styles.container}>
            {characters.map((char, index) => (
            <div
                key={char.name}
                ref={(el) => (tiltRefs.current[index] = el)}
                className={styles.card}
                onClick={() => onSelect(char)}
            >
                {/* 背景 */}
                <div className={styles.background} />
                {/* 浮く */}
                <div className={styles.imageLayer}>
                    <Image
                        src={char.image}
                        alt={char.name}
                        fill
                        className={styles.image}
                        />
                    </div>
                <p className={styles.name}>{char.name}</p>
            </div>
        ))}
        </div>
    );
}
