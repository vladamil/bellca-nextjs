'use client';

import styles from './Navbar.module.css';

export default function Navbar() {
   const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
         // scrollIntoView provides smooth scrolling without changing the URL
         element.scrollIntoView();
      }
   };

   return (
      <nav className={styles.navbar}>
         <ul className={styles.navList}>
            <li>
               <button
                  className={styles.navItem}
                  onClick={() => scrollToSection('home')}
               >
                  Home
               </button>
            </li>
            <li>
               <button
                  className={styles.navItem}
                  onClick={() => scrollToSection('o-nama')}
               >
                  O nama
               </button>
            </li>
            <li>
               <button
                  className={styles.navItem}
                  onClick={() => scrollToSection('nokti')}
               >
                  Noktici
               </button>
            </li>
            <li>
               <button
                  className={styles.navItem}
                  onClick={() => scrollToSection('trepavice')}
               >
                  Trepavice
               </button>
            </li>
            <li>
               <button
                  className={styles.navItem}
                  onClick={() => scrollToSection('kontakt')}
               >
                  Kontakt
               </button>
            </li>
         </ul>
      </nav>
   );
}
