import './Footer.css'

import { FooterMenu } from "./FooterMenu";
import { FooterService } from "./FooterService"
import { FooterSocial } from './FooterSocial';

export const Footer = () => (
<footer>
  <FooterMenu />
  <FooterService />
  <FooterSocial />
</footer>
);