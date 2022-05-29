import Link from 'next/link';
import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare} from 'react-icons/ai';
import {DiCssdeck, DiGitCommit} from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
      <Div1>
          <Link href='/'>
              <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
                  <DiGitCommit size='3rem' /> <Span>Thii Portfolio</Span>
              </a>
          </Link>
      </Div1>
      <Div2>
          <li>
              <Link href='#projects'>
                  <NavLink>Projects</NavLink>
              </Link>
          </li>
          <li>
              <Link href='#tech '>
                  <NavLink>Technologies</NavLink>
              </Link>
          </li>
          <li>
              <Link href='#about'>
                  <NavLink>About</NavLink>
              </Link>
          </li>
      </Div2>
      <Div3>
          <SocialIcons href='https://github.com/BernardMasika'>
              <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://twitter.com/dev_mindkit'>
              <AiFillTwitterSquare size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/bernard-masika-83a4a817b/'>
              <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://instagram.com/bernard_masika'>
              <AiFillInstagram size='3rem' />
          </SocialIcons>
      </Div3>
  </Container>
);

export default Header;
