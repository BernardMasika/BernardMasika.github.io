import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, HeaderThree } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
              Hello <br />
                I Am Bernard
            </SectionTitle>
            <SectionText>
                A Front-End Developer who turned into
                <HeaderThree>Extended Reality (VR,AR,MR) Developer</HeaderThree>
            </SectionText>
            <Button>
                <a style={{ textDecoration: 'none', color: '#fff'}} href='#about'>Read More</a>
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;