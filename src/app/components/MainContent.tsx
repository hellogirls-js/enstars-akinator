"use client"

import Anzu from './Anzu';
import Content from './Content';
import styles from '../page.module.css';
import AnzuRegular from '@/assets/anzu_talking.png';

import { useState } from "react";

export default function MainContent({ enData, rawData }: {enData: any[]; rawData: any[];}) {
  const [image, setImage] = useState(AnzuRegular);
  
  return (
    <div className={styles.container}>
      <Anzu image={image} />
      <Content setImage={setImage} enData={enData} rawData={rawData} />
    </div>
  );
}