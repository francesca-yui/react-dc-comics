import './FooterSocial.css'

const socials = [
  { id: 1, href: '#', src:'assets/footer-facebook.png', alt:'icon facebook'},
  { id: 2, href: '#', src:'assets/footer-twitter.png', alt:'icon twitter '},
  { id: 3, href: '#', src:'assets/footer-youtube.png', alt:'icon youtube'},
  { id: 4, href: '#', src:'assets/footer-pinterest.png', alt:'icon pinterest'},
  { id: 5, href: '#', src:'assets/footer-periscope.png', alt:'icon periscope'},
];

export const FooterSocial = () => (
  <section className="social">
    <button><a href="#">sign-up now!</a></button>

      <section className="icon">
      <h2>Follow Us</h2>
      {socials.map( social => (
        <a key={social.id} href={social.href}>
          <img className="icon-social" 
            src={social.src} 
            alt={social.alt}>
          </img>
          </a>
      ))}
    </section>

  </section>
);