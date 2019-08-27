import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import BorderMagic from '../someTrack/borderMagic'
// import 'enzyme-adapter-react-16'
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new Adapter() })


describe('BorderMagic Test Cases', () => {
  it('BorderMagic renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BorderMagic />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('BorderMagic show should its children', ()=>{
    const  testString = 'BorderMagic show should its children'
    const wrapper = mount(<BorderMagic>{testString}</BorderMagic>)
    expect(wrapper.text()).toEqual(testString)
  })
})
