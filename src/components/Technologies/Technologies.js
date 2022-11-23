import React from 'react';
import {DiAndroid, DiFirebase, DiReact , DiUnitySmall} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section id='tech'>
        <SectionDivider />
        <br/>
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I've worked with a range of technologies in web development, UI/UX Design and some in the backend.
        </SectionText>
        <List>
            <ListItem>
                <DiReact size='3rem' />
                <ListContainer>
                    <ListTitle>Front-End/ Design</ListTitle>
                    <ListParagraph>
                        good experience with
                        Angular 2+,<br/> now Nextjs and Figma
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size='3rem' />
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        node frameworks such as <br />
                        Nestjs and expressjs
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiAndroid size='3rem' />
                <ListContainer>
                    <ListTitle>Mobile Development</ListTitle>
                    <ListParagraph>
                        good experience with <br/>
                        React Native
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiUnitySmall size='3rem' />
                <ListContainer>
                    <ListTitle>XR Development</ListTitle>
                    <ListParagraph>
                        Experience with Unity
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
