import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
   return (
      <section className={styles.hero}>
         <div className={styles.content}>
            <p>
               Vaš život ne mora biti savršen, ali nokti i trepavice mogu biti
            </p>
            <button className={styles.cta}>Zakažite termin</button>
         </div>

         <div className={styles.imageWrapper}>
            <Image
               src="/hero.png"
               alt="Beauty model"
               fill
               sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
               priority
               className={styles.image}
            />
         </div>
      </section>
   );
}
