import React from 'react'
import { mount } from 'enzyme'
import Button from '../../src/components/Button/index.js'

describe('Button Test Cases', () => {
    it('button should be render', ()=>{
        const wrapper = mount(<Button />)
        expect(wrapper.text()).toEqual('content : here is my name ')
        console.log(wrapper.text())
    })
})
