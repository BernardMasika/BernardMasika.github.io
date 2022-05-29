import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
              Hello <br />
                I Am Bernard
            </SectionTitle>
            <SectionText>
                a fullstack Web and a mobile developer based on javaScript frameworks and tools.
                Depending on a problem or Scenario, sometimes i can use tools from other technologies!
            </SectionText>
            <Button>
                <a style={{ textDecoration: 'none', color: '#fff'}} href='#about'>Read More</a>
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;