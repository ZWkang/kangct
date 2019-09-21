import invariant from 'tiny-invariant';
class Intl {
  constructor(options) {
    invariant(options.local, 'options.local should set');
    invariant(options.locals, 'options.locals should set');
    this.local =
      options.default || options.local || navigator.language || navigator.browserLanguage || '';
    this.locals = options.locals || [];
  }
  get d() {
    let result = {};
    let data = this.locals[this.local];
    Object.keys(data).forEach((_) => {
      Object.defineProperty(result, _, {
        get() {
          return data[_] || '';
        }
      });
    });
    return result;
  }
  formatMessage(string) {
    return new Function(`with(${JSON.stringify(this.locals[this.local])}){
        return \`${string}\`;
    }`)();
  }
}

// use i18n = new Intl({local: xxx, locals: {a: 'xxx'}})
// i18n.d.a = 'xxx'
// i18n.formatMessage('myname is ${a}')
export default Intl;
