import Image from 'next/image';
import styles from './Location.module.css';

export default function Location() {
   return (
      <div className={styles.contentBg}>
         <Image
            src="/about/about1.jpg"
            alt="Background"
            fill
            sizes="(max-width: 768px) 400px, 50vw"
            className={styles.bgImage}
            draggable="false"
         />

         <div className={styles.location}>
            <div className="phone">
               <h3>Zakažite Vaš termin</h3>
               <div>
                  <p className="message">pošaljite SMS:</p>
                  <p>
                     <i
                        className="fa-regular fa-envelope"
                        // style="color: silver"
                     ></i>
                     +381652378902
                  </p>
               </div>
               <div>
                  <p className="message">pošaljite Viber poruku:</p>
                  <p>
                     <i
                        className="fa-brands fa-viber"
                        // style="color: #7360f2"
                     ></i>
                     +381652378902
                  </p>
               </div>
               <div>
                  <p className="message">pišite u DM:</p>
                  <a
                     href="https://www.instagram.com/bellcabeauty?igsh=MWFza2dqY2gxMmk2ZA%3D%3D"
                     target="_blank"
                     // style="text-decoration: none; color: white"
                  >
                     <p>
                        <i
                           id="insta"
                           className="fa-brands fa-instagram"
                           // style="color: #fcaf45"
                        ></i>
                        Bellca Beauty Studio
                     </p>
                  </a>
               </div>
               <div>
                  <p className="message">posetite nas:</p>
                  <p>
                     <i
                        className="fa-solid fa-location-dot"
                        // style="color: #9b111e"
                     ></i>
                     Janka Čmelika 27, Novi Sad
                  </p>
               </div>
            </div>
            <div className="map">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.490440796016!2d19.809175578132592!3d45.258095924768526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b11b48382448d%3A0x7a14494d6f9426a0!2z0IjQsNC90LrQsCDQp9C80LXQu9C40LrQsCAyNywg0J3QvtCy0Lgg0KHQsNC0!5e0!3m2!1ssr!2srs!4v1710247247008!5m2!1ssr!2srs"
                  width="100%"
                  height="100%"
                  // style="border: none; outline: none"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
         </div>
      </div>
   );
}

//  <section class="section contact" id="contact">
//          <div class="container">
//             <h3>Bile su u salonu i rekle su o meni</h3>
//             <div class="testimonials">
//                <p class="icon"><i class="fa-solid fa-quote-left"></i></p>

//                <div class="content">
//                   <!-- CREATED FROM JS -->
//                </div>
//             </div>
//             <div class="location">
//                <div class="phone">
//                   <h3>Zakažite Vaš termin</h3>
//                   <div>
//                      <p class="message">pošaljite SMS:</p>
//                      <p>
//                         <i
//                            class="fa-regular fa-envelope"
//                            style="color: silver"
//                         ></i>
//                         +381652378902
//                      </p>
//                   </div>
//                   <div>
//                      <p class="message">pošaljite Viber poruku:</p>
//                      <p>
//                         <i
//                            class="fa-brands fa-viber"
//                            style="color: #7360f2"
//                         ></i>
//                         +381652378902
//                      </p>
//                   </div>
//                   <div>
//                      <p class="message">pišite u DM:</p>
//                      <a
//                         href="https://www.instagram.com/bellcabeauty?igsh=MWFza2dqY2gxMmk2ZA%3D%3D"
//                         target="_blank"
//                         style="text-decoration: none; color: white"
//                      >
//                         <p>
//                            <i
//                               id="insta"
//                               class="fa-brands fa-instagram"
//                               style="color: #fcaf45"
//                            ></i>
//                            Bellca Beauty Studio
//                         </p>
//                      </a>
//                   </div>
//                   <div>
//                      <p class="message">posetite nas:</p>
//                      <p>
//                         <i
//                            class="fa-solid fa-location-dot"
//                            style="color: #9b111e"
//                         ></i>
//                         Janka Čmelika 27, Novi Sad
//                      </p>
//                   </div>
//                </div>
//                <div class="map">
//                   <iframe
//                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.490440796016!2d19.809175578132592!3d45.258095924768526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b11b48382448d%3A0x7a14494d6f9426a0!2z0IjQsNC90LrQsCDQp9C80LXQu9C40LrQsCAyNywg0J3QvtCy0Lgg0KHQsNC0!5e0!3m2!1ssr!2srs!4v1710247247008!5m2!1ssr!2srs"
//                      width="100%"
//                      height="100%"
//                      style="border: none; outline: none"
//                      allowfullscreen=""
//                      loading="lazy"
//                      referrerpolicy="no-referrer-when-downgrade"
//                   ></iframe>
//                </div>
//             </div>
//          </div>
//       </section>
