import help from '@app/Animate/help.js';

describe('Animate#help', () => {
  it('get the animate help snapshot', () => {
    expect(help).toMatchSnapshot();
  });
});
