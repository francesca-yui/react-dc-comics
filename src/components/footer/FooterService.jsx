import './FooterService.css';
import { services } from '../components/data/services';

export const FooterService = () => (
  <div className="footer-service">
    <div className="service-bar">
      { services.map( service => (
        <section className={service.className}>
          <h2>{service.title}</h2>
          <ul>
            { service.links.map ( link => (
            <li key={link.id}><a href={link.href}>{link.content}</a></li>
            ))}
          </ul>
        </section>
      ))}
    </div>
    <img className="footer-dc-logo" src="assets/dc-logo-bg.png" alt="footer dc logo" />
</div>
);