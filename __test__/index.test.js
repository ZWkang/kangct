import ALL from '../src/index';


describe('The Entry Should Be Right', ()=>{
    it('here export should be a object', ()=>{
        expect(ALL).toHaveProperty('Button')
    })
})