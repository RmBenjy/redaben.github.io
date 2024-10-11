import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
import Image from './IT STICKER LOGO.png';

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
  width: 100%;
  max-width: 400px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
  a {
    &:focus {
      outline: 0;
    }
  }
`;

const StyledTitle = styled.h4`
  margin: 0 auto;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;

const Studies = () => {
  const revealContainer = useRef(null);
  const imageStyle = {
    width: '100%', // Adjust this value to make the image wider or narrower
    height: '100%', // Maintain the aspect ratio
  };
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="other" ref={revealContainer}>
      <Heading>{'Other'}</Heading>
      <StyledFlexContainer>
        <StyledContent>
          <StyledTitle>- IT Club</StyledTitle>
          {
            <SkillsContainer>
              <Skill>
                {`${'President'}: `}
                <span style={{ color: 'white' }}>
                  <ul>
                    <li>
                      {
                        'Team Management and Leadership.'
                      }
                    </li>
                    <li>
                      {
                        'Organization of a conference around retail and entrepreneurship.'
                      }
                    </li>
                    <li>
                      {
                        'Organization of a conference around the Cloud and Kubernetes.'
                      }
                    </li>
                    <li>
                      {
                        'Management of a training team in different units (Cybersecurity, Data Science, Web Development, Competitive Programming).'
                      }
                    </li>
                    <li>
                      {
                        'Organization of internal competitions.'
                      }
                    </li>

                        
                        
                        
                        
  
                    
                  </ul>
                </span>
                <br /> <br /> <br />
              </Skill>
            </SkillsContainer>
          }
          <StyledTitle>- Paradisiers AIAC Club </StyledTitle>
          {
            <SkillsContainer>
              <Skill>
                {`${'Member'}: `}
                <span style={{ color: 'white' }}>
                  <ul>
                    <li>
                      {
                        'Member of the sponsorship unit of the humanitarian club Paradisiers AIAC.'
                      }
                    </li>
                  </ul>
                </span>
                <br />
        
              </Skill>
            </SkillsContainer>
          }
        </StyledContent>
        <StyledPic>
          <img src={Image} alt="." style={imageStyle} />
        </StyledPic>
      </StyledFlexContainer>
    </StyledContainer>
  );
};

Studies.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Studies;
