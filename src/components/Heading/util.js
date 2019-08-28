import React from 'react';
import styled, { css } from 'styled-components';

// from https://github.com/sofish/typo.css/blob/master/typo.css
const BaseHeading = css`
  margin: 0;
  padding: 0;
`;

const resetHTML5Tag = css`
  display: block;
`;

const mediaTag = css`
  display: inline-block;
`;

const formItem = css`
  font: 400 18px/1.62 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Droid Sans', 'Helvetica Neue',
    'PingFang SC', 'Hiragino Sans GB', 'Droid Sans Fallback', 'Microsoft YaHei', sans-serif;
  color: #444443;
`;

const Blockquote = styled.blockquote`
  ${BaseHeading}
  position: relative;
  color: #999;
  font-weight: 400;
  border-left: 1px solid #1abc9c;
  padding-left: 1em;
  margin: 1em 3em 1em 2em;
  @media only screen and (max-width: 640px) {
    margin: 1em 0;
  }
`;

const Acronym = css`
  border-bottom: 1px dotted;
  font-variant: normal;
  text-decoration: none;
`;
const Abbr = styled.abbr`
  ${Acronym}
  cursor: help;
`;

const Del = styled.del`
  text-decoration: line-through;
`;

const HTitleBase = css`
  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Droid Sans", "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", sans-serif;
  color: #222223; */
  font-family: PingFang SC, Verdana, Helvetica Neue, Microsoft Yahei, Hiragino Sans GB,
    Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
  font-weight: 100;
  color: #000;
  /* line-height: 1.35; */

  /* margin-top: 1.2em;
    margin-bottom: 0.6em;
    line-height: 1.35; */
`;

const H1 = styled.h1`
  ${HTitleBase}
  font-size: 2em;
`;

const H2 = styled.h2`
  ${HTitleBase}
  font-size: 1.8em;
`;

const H3 = styled.h3`
  ${HTitleBase}
  font-size: 1.6em;
`;

const H4 = styled.h4`
  ${HTitleBase}
  font-size: 1.4em;
`;

const H5 = styled.h5`
  ${HTitleBase}
  font-size: 1.2em;
`;

const H6 = styled.h6`
  ${HTitleBase}
  font-size: 1.2em;
`;

const Mark = styled.mark`
  background: #fffdd1;
  border-bottom: 1px solid #ffedce;
  padding: 2px;
  margin: 0 5px;
`;

const Ol = styled.ol`
  ${BaseHeading}
  ${HTitleBase}
    list-style: decimal;
  margin-left: 1.9em;
  line-height: 1.8;
  li ul,
  li ol {
    margin-bottom: 0.8em;
    margin-left: 2em;
    list-style: circle;
  }
`;

const Ul = styled.ul`
  ${BaseHeading}
  ${HTitleBase}
    line-height: 1.8;
  margin-left: 1.3em;
  list-style: disc;
  li ul,
  li ol {
    margin-bottom: 0.8em;
    margin-left: 2em;
    list-style: circle;
  }
`;

const Sup = styled.sup`
  font-size: 75%;
  line-height: 0;
  position: relative;
  top: -0.5em;
`;

const Sub = styled.sub`
  font-size: 75%;
  line-height: 0;
  position: relative;
  bottom: -0.25em;
`;

const A = styled.a`
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const Ins = styled.ins`
  text-decoration: none;
`;

const Hr = styled.hr`
  border: none;
  border-bottom: 1px solid #cfcfcf;
  margin-bottom: 0.8em;
  height: 10px;
`;

const Strong = styled.strong`
  font-weight: bold;
  color: #000;
`;
const B = styled.b`
  font-weight: bold;
  color: #000;
`;

const Pre = styled.pre`
  font-family: Courier, 'Courier New', monospace;
  background: #f8f8f8;
  border: 1px solid #ddd;
  padding: 1em 1.5em;
  display: block;
  -webkit-overflow-scrolling: touch;
`;

const Code = styled.code`
  font-family: Courier, 'Courier New', monospace;
  padding: 2px 4px;
  font-size: 90%;
  color: #c7254e;
  background-color: #f9f2f4;
  border-radius: 4px;
`;

const Figcaption = styled.figcaption`
  font-size: 0.9em;
  color: #888;
`;

const Small = styled.small`
  font-size: 0.9em;
  color: #888;
`;

const P = styled.p`
  ${BaseHeading}
  ${HTitleBase}
    margin-bottom: 1.2em;
  margin: 1em 0 0.6em;
`;
const Li = styled.li`
  ${BaseHeading}
`;
export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Abbr,
  Del,
  Mark,
  Ol,
  Ul,
  Sup,
  Sub,
  A,
  Ins,
  Hr,
  Strong,
  B,
  Pre,
  Code,
  Figcaption,
  Small,
  P,
  Li,
  Blockquote
};
