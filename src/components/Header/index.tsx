/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import NightMode from "../NightMode";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div>
        <Image
          width={"50px"}
          height={"50px"}
          src="https://i.pinimg.com/736x/30/09/ff/3009fffb258c493c512a6f72a5514b9c.jpg"
        />
      </div>
      <NightMode />
    </header>
  );
}
