import Image from "next/image";
import styles from "./Item.module.scss";

type Character = {
  name: string;
  src: any;
};

type Props = {
  characters: Character[];
  tiltRefs: React.MutableRefObject<HTMLDivElement[]>;
};

export default function Item({ characters, tiltRefs }: Props) {
  return (
    <div className={styles.container}>
      {characters.map((char, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) tiltRefs.current[index] = el;
          }}
          className={styles.card}
        >
          {/* 背景（動かない） */}
          <div className={styles.background} />

          {/* キャラだけ浮く */}
          <div className={styles.imageLayer}>
            <Image src={char.src} alt={char.name} fill />
          </div>

          <p className={styles.name}>{char.name}</p>
        </div>
      ))}
    </div>
  );
}
