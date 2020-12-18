// import React, { Component, useRef } from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// // import Portal from '../Portal';
// import Timer from './Timer';
// import { CSSTransition } from 'react-transition-group';
// import './index.css';

// /**
//  * first: 确定一个容器
//  * second: 容器内部渲染notification
//  * thrid: setTimeout卸载或者手动卸载
//  */
// const NotificationContainer = styled.div`
//   position: fixed;
//   right: 0;
//   top: 10px;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   pointer-events: none;
// `;
// const ItemWrapper = styled.div`
//   /* position: fixed; */
//   /* top: 10px; */
//   /* right: 20px; */
//   width: 20%;
//   background-color: rgb(233, 241, 255);
//   color: rgb(66, 132, 245);
//   opacity: 1;
//   z-index: 1020;
//   padding: 15px 40px 15px 50px;
//   border-color: rgb(180, 208, 255);
//   transition: all 0.2s ease-out 0s;
//   border-radius: 5px;
//   margin-bottom: 10px;
//   margin-right: 10px;
//   pointer-events: auto;
// `;
// const NotiTitle = styled.span`
//   display: block;
//   margin-bottom: 5px;
//   font-size: 18px;
// `;

// const NotiClose = styled.i`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   font-size: 14px;
//   cursor: pointer;
//   right: 16px;
// `;

// let notifiId = 0;

// let AgamennonNoti = '.AgamennonNoti';

// const makeNotiHook = () => {
//   let AgamennonNotiContainer = document.querySelector(AgamennonNoti);
//   if (!AgamennonNotiContainer) {
//     let Container = document.createElement('div');
//     Container.className = 'AgamennonNoti';
//     document.body.appendChild(Container);
//     return Container;
//   }
//   return AgamennonNotiContainer;
// };

// class Notification extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show: false
//     };
//   }
// }

// function notify(type, message, autoClose, closeTime) {}

// export default Notification;
