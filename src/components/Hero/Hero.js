import React from 'react';
import styled from 'styled-components';
import is from 'styled-is';
const Hero = styled.section`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
`;

const HeroLeft = styled.div`
  flex: 1;
`;
Hero.HeroLeft = HeroLeft;

const HeroH1 = styled.h1`
  margin-bottom: 0.4em;

  font-size: 35px;
  font-weight: 600;
  line-height: 58px;
  letter-spacing: -0.2px;
`;
Hero.HeroH1 = HeroH1;

const HeroP = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 40px;
`;

// & a.Link {
const HeroA = styled.a`
  color: rgb(66, 90, 112);
  border-bottom: 2px solid rgba(66, 90, 112, 0.05);

  &:hover {
    border-bottom-color: var(--green-base);
  }

  &:active {
    color: rgba(66, 90, 112, 0.1);
    border-bottom-color: rgba(66, 90, 112, 0.1);
  }
`;
Hero.HeroA = HeroA;

const HeroRight = styled.div`
  flex: 1;
  padding-left: 48px;
  & img {
    width: 100%;
  }
`;
Hero.HeroRight = HeroRight;

const HeroBody = styled.div`
  display: flex;
  align-items: center;
  padding: 4em 2em;
  ${is('medium')`
    padding: 5em 2.5em;
  `}
  ${is('large')`
    padding: 6em 3em;
  `}
  margin-right: 0;
  margin-left: 0;
  max-width: 1024px;

  /* -webkit-box-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    
    padding: 80px 24px; */
`;
Hero.HeroBody = HeroBody;
export { HeroBody, HeroA, Hero, HeroH1, HeroLeft, HeroRight, HeroP };
