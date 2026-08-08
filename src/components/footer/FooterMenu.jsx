import './FooterMenu.css'

const menus = [
  { id: 1, href: '#', src: 'assets/buy-comics-digital-comics.png', alt: 'digital-comics', content: 'Digital Comics'},
  { id: 2, href: '#', src: 'assets/buy-comics-merchandise.png', alt: 'merchandise', content: 'Dc Merchandise'},
  { id: 3, href: '#', src: 'assets/buy-comics-subscriptions.png', alt: 'subscriptions', content: 'Subscription'},
  { id: 4, href: '#', src: 'assets/buy-comics-shop-locator.png', alt: 'locator', content: 'Comic Shop Locator'},
  { id: 5, href: '#', src: 'assets/buy-dc-power-visa.png', alt: 'power-visa', content: 'Dc Power Visa'},
];

export const FooterMenu = () => (
  <section className="menu">
    <ul>
      { menus.map( menu => (
        <li key={menu.id}><a href={menu.href}><img src={menu.src} className="buy-comics" alt={menu.alt}></img>{menu.content}</a></li>
      ))}
    </ul>
  </section>
);