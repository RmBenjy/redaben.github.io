import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  position: relative;
`;
const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const StyledContent = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(400px, 800px));
  overflow: hidden;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  color: ${colors.green};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${colors.green};
    font-size: ${fontSizes.sm};
    line-height: 12px;
  }
`;
const StyledPic = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
  a {
    &:focus {
      outline: 0;
    }
  }
`;
const StyledAvatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;
const StyledAvatarLink = styled.a`
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.lightestSlate};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${StyledAvatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.green};
    top: 10px;
    left: 10px;
    z-index: -1;
  }
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, avatar } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="about" ref={revealContainer}>
      <Heading>{title}</Heading>
      <StyledFlexContainer>
        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />

          {
            <SkillsContainer>
              <Skill>
                {`${'Programming languages'}: `}
                <span style={{ color: 'white' }}>
                  {'Python | R | C++ | Java | SQL'}
                </span>
              </Skill>

              <Skill>
                {`${'Machine Learning Libraries'}: `}
                <span style={{ color: 'white' }}>
                  {'TensorFlow | Scikit-learn | PyTorch'}
                </span>
              </Skill>
              <Skill>
                {`${'Database Management'}: `}
                <span style={{ color: 'white' }}>
                  {' MongoDB | Oracle Database | PL/SQL | MySQL'}
                </span>
              </Skill>
                  
              <Skill>
                {`${'Data Science'}: `}
                <span style={{ color: 'white' }}>
                  {'Predictive Modeling | Data Mining | Machine Learning | Deep Learning | Feature Engineering | Data Augmentation | Automation | Data Scraping | Data Pipeline'}
                </span>
              </Skill>
                  
              <Skill>
                {`${'Data visualization tools'}: `}
                <span style={{ color: 'white' }}>{'Matplotlib | Seaborn | Plotly'}</span>
              </Skill>

              <Skill>
                {`${'Data Analysis'}: `}
                <span style={{ color: 'white' }}>
                  {'Power BI | Excel'}
                </span>
              </Skill>
            </SkillsContainer>
          }
        </StyledContent>
        <StyledPic>
          <StyledAvatarLink href="https://www.linkedin.com/in/reda-benjelloun24/">
            <StyledAvatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
          </StyledAvatarLink>
        </StyledPic>
      </StyledFlexContainer>
    </StyledContainer>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
