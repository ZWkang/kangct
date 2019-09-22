import React from 'react';
import styled, { css } from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  display: flex;
  min-width: 0;
  flex-direction: column;
  font-size: 16px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  ${(props) =>
    props.horizontal &&
    css`
      flex-direction: row;
    `}
  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
`;

const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 22px;
`;

const CardLink = styled.a`
  text-decoration: none;
  text-align: left;
  color: #007bff;
  cursor: pointer;
  vertical-align: middle;
  padding: 0.375em 0.75em;
  border-radius: 6px;
  display: inline-block;

  ${(props) =>
    props.normal ||
    css`
      color: white;
      background-color: #007bff;
      border: 1px solid #007bff;
    `}
  & + & {
    margin-left: 24px;
  }
`;

const CardHeader = styled.div`
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

const CardFooter = styled.div`
  color: #6c757d !important;
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`;

const Card = CardContainer;

// Card.Container = CardContainer;
Card.Body = CardBody;
Card.Link = CardLink;
Card.Link.displayName = 'CardLink'
Card.Header = CardHeader;
Card.Footer = CardFooter;
// export Body

/**
 * @components
 */
export default Card;
