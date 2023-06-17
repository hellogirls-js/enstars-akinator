"use client"

import { IconArrowLeft, IconArrowRight, IconCheck } from "@tabler/icons-react";
import { useState } from "react";

import styles from "../page.module.css";

export default function Introduction({ setStart }: { setStart: any }) {
  const [contentIndex, setContentIndex] = useState(0);

  const contentArr = [
    {
      title: "Welcome! Are you looking for an idol?",
      content: "My name is Anzu, and I know a lot about the idols at Ensemble Square. If you provide me with a description, I can find the right idol for you!"
    },
    {
      title: "What's the process like?",
      content: "I'll provide you with a series of questions and you will answer with either yes or no. I will use these answers to filter out idols until I can find the one that's right for you."
    }
  ];

  function Buttons() {
    return (
      <div className={styles.buttons}>
        {contentIndex > 0 && 
        <div className={`${styles.pagination} ${styles.prev}`} onClick={() => setContentIndex(contentIndex - 1)}>
          <IconArrowLeft /> Previous
        </div>}
        {contentIndex < contentArr.length - 1 && 
        (<div className={`${styles.pagination} ${styles.next}`} onClick={() => setContentIndex(contentIndex + 1)}>
          Next <IconArrowRight />
        </div>)}
        {contentIndex === contentArr.length - 1 && 
        <div className={`${styles.pagination} ${styles.start}`} onClick={() => setStart(true)}>
          Start! <IconCheck />
        </div>
        }
      </div>
    )
  }
  
  return (
    <div className={styles.content}>
      <div className={styles.contentTitle}>
        <h1>{contentArr[contentIndex].title}</h1>
      </div>
      <div className={styles.contentText}>
        <p>{contentArr[contentIndex].content}</p>
        <Buttons />
      </div>
    </div>
  );
}