import { twoStarIDs } from "@/data/twoStarIds";
import styles from "../page.module.css";
import Image from "next/image";
import { IconRefresh } from "@tabler/icons-react";
import AnzuThinking from "@/assets/anzu_thinking.png";

export default function Match({ chara, enData, rawData, setImage }: { chara: Character | undefined; enData: any[]; rawData: any[]; setImage: any }) {

  if (!chara) {
    setImage(AnzuThinking);
  }

  function Result() {
    let imageUrl = chara ? `https://assets.enstars.link/assets/card_full1_${
      (twoStarIDs as any)[chara.character_id]
    }_normal.png` : "";

    let charaEnData = enData.find(c => c.character_id === chara?.character_id);

    return (
      <div className={styles.result}>
        <div className={styles.resultImg}>
          <Image src={imageUrl} width={500} height={500 / 1.775} alt="yippee" />
        </div>
        <div className={styles.resultText}>
          You might like <span className={styles.charaName}>{charaEnData.first_name}{charaEnData.last_name && ` ${charaEnData.last_name}`}</span>!
        </div>
      </div>
    )
  }

  function Bust() {
    return (
      <> 
        <p>Would you like to try again?</p>
        <div className={styles.sadButton}>
          <div className={styles.pagination} onClick={(e) => {
            e.preventDefault();
            location.reload();
          }}>
            <IconRefresh /> Try again
          </div>
        </div>
      </>
    )
  }

  return (
    <div className={styles.content}>
      <div className={styles.contentTitle}>
        <h1>{chara ? "I found the right idol for you!" : "Hmm... I couldn't find an idol with those characteristics..."}</h1>
      </div>
      <div className={styles.contentText}>
        {chara ? <Result /> : <Bust /> }
      </div>
    </div>
  )
}