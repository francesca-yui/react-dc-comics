import './Footer.css'

import { FooterMenu } from "./FooterMenu";
import { FooterService } from "./FooterService"
import { FooterSocial } from './FooterSocial';

export const Footer = props => (
<footer>
  <FooterMenu />
  <FooterService services={props.services} />
  <FooterSocial />
</footer>
);