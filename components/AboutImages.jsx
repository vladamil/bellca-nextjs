'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './AboutUs.module.css';

const images = [
   '/about/about1.jpg',
   '/about/about2.jpg',
   '/about/about3.jpg',
   '/about/about4.jpg',
   '/about/about5.jpg',
   '/about/about6.jpg',
];

export default function AboutImages() {
   return (
      <div className={styles.imgContainer}>
         <Image
            src={images[5]}
            fill
            alt="Kozmetički salon Bellca Branchie"
            sizes=""
         />
      </div>
   );
}
