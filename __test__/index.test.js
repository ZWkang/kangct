import * as kangct from '../src/index.js';
// console.log(kangct);
describe('kangct', () => {
  it('project entry export snapshot', () => {
    expect(Object.keys(kangct)).toMatchSnapshot();
  });
});
