// import React from 'react';
// import styled, { css } from 'styled-components';
// import { injectCustomStyle } from '../utils.js';
// import is from 'styled-is';

// const IconDefaultCssString = css`
//   align-items: center;
//   display: inline-flex;
//   justify-content: center;
//   height: 24px;
//   width: 24px;
//   & > * {
//     width: 100%;
//     height: 100%;
//   }
// `;

// const sizeOptions = {
//   small: {
//     width: `16px`,
//     height: `16px`
//   },
//   medium: {
//     width: `32px`,
//     height: `32px`
//   },
//   large: {
//     width: `48px`,
//     height: `48px`
//   }
// };

// const chooseSizeOption = (props) => {
//   const result = Object.keys(props).filter((v) => /^size\-(small|medium|large)$/.exec(v) !== null);
//   if (!result || result.length === 0) {
//     return ``;
//   }
//   const resultLastOne = result[result.length - 1].split('-')[1];
//   console.log(resultLastOne);
//   return `
//     width: ${sizeOptions[resultLastOne]['width']};
//     height: ${sizeOptions[resultLastOne]['height']};
//   `;
// };

// export default styled.span`
//   ${IconDefaultCssString}
//   ${chooseSizeOption}
//   ${is('customStyle')`
//     ${(props) => props.customStyle}
//   `}
// `;
