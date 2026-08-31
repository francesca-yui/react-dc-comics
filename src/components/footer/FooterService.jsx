import './FooterService.css';

const FooterSection = props => (
    <section className={props.service.className}>
      <h2>{props.service.title}</h2>

      <ul>
        { props.service.links.map ( link => (
        <li key={link.id}>
          <a href={link.href}>{link.content}</a>
          </li>
        ))}
      </ul>
    </section>
  );

export const FooterService = props => (
  <div className="footer-service">

    <div className="service-bar">
      { props.services.map( service => 
      <FooterSection 
        key={service.id}
        service={service} 
      />)}
    </div>

    <img 
    className="footer-dc-logo"
    src="assets/dc-logo-bg.png"
    alt="footer dc logo" 
    />

</div>
);