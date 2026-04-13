import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import styles from './Nails.module.css';

export default function Lashes({ lashes }) {
   return (
      <section id="trepavice" className={styles.nails}>
         <div className="container">
            {/* BACKGROUND WRAPPER DIV*/}
            <div className={styles.contentBg}>
               <Image
                  src="/about/about5.jpg"
                  alt="Background"
                  fill
                  sizes="(max-width: 768px) 400px, 50vw"
                  className={styles.bgImage}
                  draggable="false"
               />
               <div className={`${styles.content} ${styles.reverse}`}>
                  {/* Services List */}

                  <div className={styles.services}>
                     <h3 className={styles.right}>Trepavice</h3>
                     <p>
                        <FaStar className={styles.icon} />
                        1na1 tehnika: prirodan izgled poput maskare, krajnji
                        rezultat najviše zavisi od prirodnih trepavica.
                     </p>
                     <p>
                        <FaStar className={styles.icon} />
                        2d (YY) : najpopularnija i moja omiljena tehnika jer
                        omogućava savršene, gušće trepavice ali prirodnijeg
                        izgleda
                     </p>
                     <p>
                        <FaStar className={styles.icon} />
                        4d : za one koje žele superstar izgled, sa velikom
                        gustinom i drastičnom promenom
                     </p>
                  </div>

                  {/* Images Grid */}

                  <div className={styles.bentoGrid}>
                     <div className={styles.item}>
                        <Image
                           src={lashes[0]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Lashes"
                        />
                     </div>
                     <div className={`${styles.item} ${styles.wide}`}>
                        <Image
                           src={lashes[1]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Lashes"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={lashes[2]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Lashes"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={lashes[3]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Lashes"
                        />
                     </div>
                     <div className={`${styles.item} ${styles.wide}`}>
                        <Image
                           src={lashes[4]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Lashes"
                        />
                     </div>
                     <div className={`${styles.item} ${styles.full}`}>
                        <Image
                           src={lashes[5]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Lashes"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={lashes[6]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Lashes"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={lashes[7]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Lashes"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={lashes[8]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Lashes"
                        />
                     </div>
                     <div className={`${styles.item} ${styles.tall}`}>
                        <Image
                           src={lashes[9]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Lashes"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={lashes[10]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Lashes"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={lashes[11]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Lashes"
                        />
                     </div>
                     <div className={`${styles.item} ${styles.tall}`}>
                        <Image
                           src={lashes[12]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Lashes"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={lashes[13]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Lashes"
                        />
                     </div>
                     <div className={`${styles.item} ${styles.wide}`}>
                        <Image
                           src={lashes[14]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Lashes"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={lashes[15]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Lashes"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
