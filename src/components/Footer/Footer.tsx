import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.footer`
  margin: 0 32px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: 'Open Sans', sans-serif;
`;

const SocialInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
`;

const Anchor = styled.a`
  margin: 0 8px;
`;

const AboutMe = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
`;

const Name = styled.div`
  margin: 0 8px;
`;

const Contact = styled.div`
  margin-left: 8px;
  display: flex;
`;

const VerticalDivider = styled.div`
  background-color: #EBEBEB;
  width: 1px;
  height: 40px;
  margin: 0 8px;
`;

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <SocialInfo>
        <Anchor rel="noopener" target="_blank" href="https://twitter.com/kajiken">
          <FontAwesomeIcon icon={faTwitter} width="32" style={{ color: "#1DA1F2" }}/>
        </Anchor>
        <Anchor rel="noopener" target="_blank" href="https://github.com/kajiken">
          <FontAwesomeIcon icon={faGithub} width="32" style={{ color: "#24292E" }}/>
        </Anchor>
      </SocialInfo>
      <VerticalDivider />
      <AboutMe> 
        <ProfileImage src="/images/me.png" alt="my image" />
        <Name>Kensuke KAJIWARA</Name>
        <FontAwesomeIcon icon={faBolt} width="10" style={{ color: "#111111" }}/>
        <Contact>
          k<FontAwesomeIcon icon={faAt} width="16" style={{ color: "#23B7FE" }}/>enogu.ink
        </Contact>
      </AboutMe>
    </Wrapper>
  );
};
