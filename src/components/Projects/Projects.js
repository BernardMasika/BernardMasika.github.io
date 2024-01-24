import React from 'react';

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
    Iframe
} from './ProjectsStyles';
import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import {projects} from '../../constants/constants';

const Projects = () => (<Section nopadding id='projects'>
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
        {projects.map(({title, description, id, tags, image, visit, youtubeVideo}) => (<BlogCard key={id}>
            {youtubeVideo && (<Iframe
                width="1280"
                height="720"
                src={youtubeVideo.src}
                title={youtubeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
                <p>Failed to load project</p>
            </Iframe>)}

            {/* if no video use image */}
            {!youtubeVideo && (<Img src={image}/>)}
            <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr/>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div style={{marginTop: 8}}>
                <TitleContent>Stack</TitleContent>
                <TagList>
                    {tags.map((tag, i) => (<Tag key={i}>{tag}</Tag>))}
                </TagList>
            </div>
            <UtilityList>
                {/*<ExternalLinks>Code</ExternalLinks>*/}
                <ExternalLinks href={visit}>{id === 3 ? 'Download' : 'Visit'}</ExternalLinks>
            </UtilityList>
        </BlogCard>))}
    </GridContainer>
</Section>);

export default Projects;