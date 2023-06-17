import Image, { StaticImageData } from 'next/image';
import styles from '../page.module.css';
import { useState } from 'react';

export default function Anzu({ image }: { image: StaticImageData}) {
  
  return (
    <div className={styles.anzu}>
      <Image className={styles.image} width={image.width} height={image.height} src={image.src} alt="anzu" />
    </div>
  )
}