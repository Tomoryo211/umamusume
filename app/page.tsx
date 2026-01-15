import Header from "./components/Header/Header";
import styles from "./page.module.scss";
import Display from "./components/Display/Display";

export default function Home() {
  return (
    <div className={styles.body}>
      <Header />
      <Display />
    </div>
  );
}
