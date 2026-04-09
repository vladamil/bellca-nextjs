import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import styles from './Nails.module.css';

export default function Nails({ nails }) {
   return (
      <section id="nokti" className={styles.nails}>
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

               <div className={styles.content}>
                  {/* Services List */}

                  <div className={styles.services}>
                     <h3>Noktići</h3>

                     <p>
                        <FaStar className={styles.icon} />
                        manikir
                     </p>
                     <p>
                        <FaStar className={styles.icon} />
                        gellak
                     </p>
                     <p>
                        <FaStar className={styles.icon} />
                        ojačavanje prirodnih noktiju (rubber bazom ili gelom
                        zavisno od tipa nokatne ploče)
                     </p>
                     <p>
                        <FaStar className={styles.icon} />
                        izlivanje (tehnikom dual formi, gornjih i donjih )
                     </p>
                     <p>
                        <FaStar className={styles.icon} />
                        nadogradnja Gel x tipsama (tipse nove generacije koje su
                        izrađene od gela, a apliciraju se na nokat rubber bazom
                        umesto lepkom)
                     </p>
                     <p>
                        <FaStar className={styles.icon} />
                        građeni frenč
                     </p>
                     <p>
                        <FaStar className={styles.icon} />
                        tehnike ukrašavanja : frenč, ombre, fade, cirkoni, nail
                        art, transfer folije, blossom, cat eye, aurora
                     </p>
                  </div>

                  {/* Images Grid */}

                  <div className={styles.bentoGrid}>
                     <div className={styles.item}>
                        <Image
                           src={nails[0]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Nails"
                        />
                     </div>
                     <div className={`${styles.item} ${styles.wide}`}>
                        <Image
                           src={nails[1]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Nails"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={nails[2]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Nails"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={nails[3]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Nails"
                        />
                     </div>
                     <div className={`${styles.item} ${styles.wide}`}>
                        <Image
                           src={nails[4]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Nails"
                        />
                     </div>
                     <div className={`${styles.item} ${styles.full}`}>
                        <Image
                           src={nails[5]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Nails"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={nails[6]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Nails"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={nails[7]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Nails"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={nails[8]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Nails"
                        />
                     </div>
                     <div className={`${styles.item} ${styles.tall}`}>
                        <Image
                           src={nails[9]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Nails"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={nails[10]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Nails"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={nails[11]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Nails"
                        />
                     </div>
                     <div className={`${styles.item} ${styles.tall}`}>
                        <Image
                           src={nails[12]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Nails"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={nails[13]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Nails"
                        />
                     </div>
                     <div className={`${styles.item} ${styles.wide}`}>
                        <Image
                           src={nails[14]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Nails"
                        />
                     </div>
                     <div className={styles.item}>
                        <Image
                           src={nails[15]}
                           fill
                           sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                           alt="Nails"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
