import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
      <FooterWrapper>
          <LinkList>
              <LinkColumn>
                  <LinkTitle>Call</LinkTitle>
                  <LinkItem href='tel:+255716736160'>+255716736160</LinkItem>
              </LinkColumn>
              <LinkColumn>
                  <LinkTitle>Email</LinkTitle>
                  <LinkItem href='mailto:masikabernard89@gmail.com'>masikabernard89@gmail.com</LinkItem>
              </LinkColumn>
          </LinkList>
          <SocialContainer>
             <CompanyContainer>
                 <Slogan>Software Development is more than that, it's an Art!</Slogan>
             </CompanyContainer>
             <SocialContainer>
                 <SocialIcons href='https://github.com/BernardMasika'>
                     <AiFillGithub size='3rem' />
                 </SocialIcons>
                 <SocialIcons href='https://twitter.com/dev_mindkit'>
                     <AiFillTwitterCircle size='3rem' />
                 </SocialIcons>
                 <SocialIcons href='https://www.linkedin.com/in/bernard-masika-83a4a817b/'>
                     <AiFillLinkedin size='3rem' />
                 </SocialIcons>
                 <SocialIcons href='https://instagram.com/bernard_masika'>
                     <AiFillInstagram size='3rem' />
                 </SocialIcons>
             </SocialContainer>
          </SocialContainer>
      </FooterWrapper>
  );
};

export default Footer;
