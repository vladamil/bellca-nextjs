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
         <div>{/* Empty div for flex */}</div>
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
                  Noktići
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
         <div>SOCIALS</div>
      </nav>
   );
}

// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import styles from './Navbar.module.css';

// const sections = ['home', 'about', 'services', 'contact'];

// export default function Navbar() {
//   const [activeSection, setActiveSection] = useState('home');
//   const isScrollingAuto = useRef(false); // The "Flag" to prevent flickering

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       isScrollingAuto.current = true; // Block the observer
//       setActiveSection(id); // Set active immediately for instant feedback

//       element.scrollIntoView({ behavior: 'smooth' });

//       // Re-enable observer after the smooth scroll finishes (~800ms)
//       setTimeout(() => {
//         isScrollingAuto.current = false;
//       }, 800);
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (isScrollingAuto.current) return; // Skip if we are mid-click-scroll

//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       {
//         // This "hit zone" ensures the link changes when the section
//         // reaches the top 30% of the screen.
//         rootMargin: '-30% 0px -60% 0px',
//         threshold: 0
//       }
//     );

//     sections.forEach((id) => {
//       const el = document.getElementById(id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <nav className={styles.navbar}>
//       <ul className={styles.navList}>
//         {sections.map((section) => (
//           <li key={section}>
//             <button
//               onClick={() => scrollToSection(section)}
//               className={`${styles.navItem} ${activeSection === section ? styles.active : ''}`}
//             >
//               {section.charAt(0).toUpperCase() + section.slice(1)}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }
