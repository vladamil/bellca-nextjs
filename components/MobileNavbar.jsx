import { FaTimes } from 'react-icons/fa';

import styles from './MobileNavbar.module.css';

export default function MobileNavbar({ open, onClose, scrollToSection }) {
   return (
      <div className={`${styles.sideMenu} ${open ? styles.open : ''}`}>
         <button className={styles.sideClose} onClick={onClose}>
            <FaTimes />
         </button>
         <div className="side-links">
            {/* <ul>
               <li>
                  <a href="#home" className="internal">
                     Home
                  </a>
               </li>
               <li>
                  <a href="#about" className="internal">
                     O nama
                  </a>
               </li>
               <li>
                  <a href="#nails" className="internal">
                     Nokti
                  </a>
               </li>
               <li>
                  <a href="#eyelashes" className="internal">
                     Trepavice
                  </a>
               </li>
               <li>
                  <a href="#contact" className="internal">
                     Kontakt
                  </a>
               </li>
            </ul> */}
            <ul className={styles.navList}>
               <li>
                  <button
                     className={styles.navItem}
                     onClick={() => {
                        scrollToSection('home');
                        onClose();
                     }}
                  >
                     Home
                  </button>
               </li>
               <li>
                  <button
                     className={styles.navItem}
                     onClick={() => {
                        scrollToSection('o-nama');
                        onClose();
                     }}
                  >
                     O nama
                  </button>
               </li>
               <li>
                  <button
                     className={styles.navItem}
                     onClick={() => {
                        scrollToSection('nokti');
                        onClose();
                     }}
                  >
                     Noktići
                  </button>
               </li>
               <li>
                  <button
                     className={styles.navItem}
                     onClick={() => {
                        scrollToSection('trepavice');
                        onClose();
                     }}
                  >
                     Trepavice
                  </button>
               </li>
               <li>
                  <button
                     className={styles.navItem}
                     onClick={() => {
                        scrollToSection('kontakt');
                        onClose();
                     }}
                  >
                     Kontakt
                  </button>
               </li>
            </ul>
         </div>
         <div className="side-socials">
            <p>
               <a
                  href="https://www.facebook.com/profile.php?id=61551700088201"
                  target="_blank"
               >
                  <i className="fa-brands fa-facebook"></i>
               </a>
            </p>
            <p>
               <a
                  href="https://www.instagram.com/bellcabeauty?igsh=MWFza2dqY2gxMmk2ZA%3D%3D"
                  target="_blank"
               >
                  <i className="fa-brands fa-instagram"></i>
               </a>
            </p>
         </div>
      </div>
   );
}
