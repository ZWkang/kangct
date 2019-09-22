const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const React = require('react');
enzyme.configure({ adapter: new Adapter() });

global.shallow = enzyme.shallow;
global.mount = enzyme.mount;
global.render = enzyme.render;

global.React = React;
