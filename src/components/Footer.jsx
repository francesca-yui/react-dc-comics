import './Footer.css'

const Menu = () => (
  <section className="menu">
    <ul>
      <li><a href="#"><img className="buy-comics" src="assets/buy-comics-digital-comics.png" alt="digital-comics"></img>Digital Comics</a></li>
      <li><a href="#"><img className="buy-comics" src="assets/buy-comics-merchandise.png" alt="merchandise"></img>Dc Merchandise</a></li>
      <li><a href="#"><img className="buy-comics" src="assets/buy-comics-subscriptions.png" alt="subscriptions"></img>Subscription</a></li>
      <li><a href="#"><img className="buy-comics" src="assets/buy-comics-shop-locator.png" alt="locator"></img>Comic Shop Locator</a></li>
      <li><a href="#"><img className="buy-comics-visa" src="assets/buy-dc-power-visa.png" alt="power-visa"></img>Dc Power Visa</a></li>
    </ul>
  </section>
);

const Widget = () => (
  <div className="widget">
    <div className="service-bar">
      <section>
      <h2>Dc Comics</h2>
      <ul>
        <li><a href="#">Characters</a></li>
        <li><a href="#">Comics</a></li>
        <li><a href="#">Movie</a></li>
        <li><a href="#">TV</a></li>
        <li><a href="#">Games</a></li>
        <li><a href="#">Videos</a></li>
        <li><a href="#">News</a></li>
      </ul>
        <h2>Shop</h2>
        <ul>
          <li><a href="#">Shop DC</a></li>
          <li><a href="#">Shop DC Collectibles</a></li>
        </ul>
      </section>
      <section>
        <h2>Dc</h2>
        <ul>
          <li><a href="#">Terms Of Use</a></li>
          <li><a href="#">Privacy Policy {"(New)"}</a></li>
          <li><a href="#">Ad Choices</a></li>
          <li><a href="#">Advertising</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Subscriptions</a></li>
          <li><a href="#">Talent Workshops</a></li>
          <li><a href="#">CPSC Certificates</a></li>
          <li><a href="#">Ratings</a></li>
          <li><a href="#">Shop Help</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </section>
      <section>
        <h2>Sites</h2>
        <ul>
          <li><a href="#">DC</a></li>
          <li><a href="#">MAD Magazine</a></li>
          <li><a href="#">DC Kids</a></li>
          <li><a href="#">DC Universe</a></li>
          <li><a href="#">DC Power Visa</a></li>
        </ul>
      </section>
    </div>
    <div><img className="footer-dc-logo" src="assets/dc-logo-bg.png" alt="footer dc logo" /></div>
</div>
);

const Social = () => (
  <section className="social">
    <button> <a href="#">sign-up now!</a></button>
      <section className="icon">
      <h2>Follow Us</h2>
      <a href="#"><img className="icon-social" src="assets/footer-facebook.png" alt="icon facebook"></img></a>
      <a href="#"><img className="icon-social" src="assets/footer-twitter.png" alt="icon twitter"></img></a>
      <a href="#"><img className="icon-social" src="assets/footer-youtube.png" alt="icon youtube"></img></a>
      <a href="#"><img className="icon-social" src="assets/footer-pinterest.png" alt="icon pinterest"></img></a>
      <a href="#"><img className="icon-social" src="assets/footer-periscope.png" alt="icon periscope"></img></a>
    </section>
    </section>
);

export const Footer = () => (
<footer>
  <Menu />
  <Widget />
  <Social />
</footer>
);