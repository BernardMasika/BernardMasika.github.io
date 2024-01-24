import React from 'react';
import {DiAndroid, DiBlackberry, DiFirebase, DiReact, DiUnitySmall} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import {SiBlender} from "react-icons/all";

const Technologies = () =>  (
    <Section id='tech'>
        <SectionDivider />
        <br/>
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I've worked with a range of technologies in FrontEnd, UI/UX Design and now with XR development.
        </SectionText>
        <List>
            <ListItem>
                <DiReact size='3rem' style={{opacity: 0.3}}/>
                <ListContainer>
                    <ListTitle style={{opacity: 0.3}}>Front-End/ Design</ListTitle>
                    <ListParagraph style={{opacity: 0.3}}>
                        good experience with
                        Angular 2+,<br/> now Nextjs and Figma
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiAndroid size='3rem' style={{opacity: 0.3}}/>
                <ListContainer>
                    <ListTitle style={{opacity: 0.3}}>Mobile Development</ListTitle>
                    <ListParagraph style={{opacity: 0.3}}>
                        good experience with <br/>
                        React Native
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiUnitySmall size='3rem'  />
                <ListContainer>
                    <ListTitle>XR Development</ListTitle>
                    <ListParagraph>
                        Experienced with Unity
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <SiBlender size='3rem' />
                <ListContainer>
                    <ListTitle>3D Artistry</ListTitle>
                    <ListParagraph>
                        Experienced with Blender
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
