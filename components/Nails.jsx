import styles from './Nails.module.css';

export default function Nails({ nails }) {
   return (
      <section id="nokti" className={styles.nails}>
         <div className="container">
            <div className={styles.content}>
               {/* LEFT SIDE */}

               <div className={styles.services}>
                  <h3>Noktići</h3>
                  <p>
                     <i class="fa-solid fa-star"></i>
                     manikir
                  </p>
                  <p>
                     <i class="fa-solid fa-star"></i>
                     gellak
                  </p>
                  <p>
                     <i class="fa-solid fa-star"></i>
                     ojačavanje prirodnih noktiju (rubber bazom ili gelom
                     zavisno od tipa nokatne ploče)
                  </p>
                  <p>
                     <i class="fa-solid fa-star"></i>
                     izlivanje (tehnikom dual formi, gornjih i donjih )
                  </p>
                  <p>
                     <i class="fa-solid fa-star"></i>
                     nadogradnja Gel x tipsama (tipse nove generacije koje su
                     izrađene od gela, a apliciraju se na nokat rubber bazom
                     umesto lepkom)
                  </p>
                  <p>
                     <i class="fa-solid fa-star"></i>
                     građeni frenč
                  </p>
                  <p>
                     <i class="fa-solid fa-star"></i>
                     tehnike ukrašavanja : frenč, ombre, fade, cirkoni, nail
                     art, transfer folije, blossom, cat eye, aurora
                  </p>
               </div>

               {/* RIGHT SIDE */}

               <div className={styles.bentoGrid}>
                  <div className={styles.item}>
                     <img src={nails[0]} alt="Nails" />
                  </div>
                  <div className={`${styles.item} ${styles.wide}`}>
                     <img src={nails[1]} alt="Nails" />
                  </div>
                  <div className={styles.item}>
                     <img src={nails[2]} alt="Nails" />
                  </div>
                  <div className={styles.item}>
                     <img src={nails[3]} alt="Nails" />
                  </div>
                  <div className={`${styles.item} ${styles.wide}`}>
                     <img src={nails[4]} alt="Nails" />
                  </div>
                  <div className={`${styles.item} ${styles.full}`}>
                     <img src={nails[5]} alt="Nails" />
                  </div>
                  <div className={styles.item}>
                     <img src={nails[6]} alt="Nails" />
                  </div>
                  <div className={styles.item}>
                     <img src={nails[7]} alt="Nails" />
                  </div>
                  <div className={styles.item}>
                     <img src={nails[8]} alt="Nails" />
                  </div>
                  <div className={`${styles.item} ${styles.tall}`}>
                     <img src={nails[9]} alt="Nails" />
                  </div>
                  <div className={styles.item}>
                     <img src={nails[10]} alt="Nails" />
                  </div>
                  <div className={styles.item}>
                     <img src={nails[11]} alt="Nails" />
                  </div>
                  <div className={`${styles.item} ${styles.tall}`}>
                     <img src={nails[12]} alt="Nails" />
                  </div>
                  <div className={styles.item}>
                     <img src={nails[13]} alt="Nails" />
                  </div>
                  <div className={`${styles.item} ${styles.wide}`}>
                     <img src={nails[14]} alt="Nails" />
                  </div>
                  <div className={styles.item}>
                     <img src={nails[15]} alt="Nails" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
