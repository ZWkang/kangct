```jsx
class BackToTop extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isShow: false
    };
    this.ref = null;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    if (window.scrollY > window.screen.height) {
      this.setState({
        isShow: true
      });
    } else {
      this.setState({
        isShow: false
      });
    }
  }
  render() {
    const style = {
      position: 'fixed',
      bottom: 0,
      right: '20px',
      width: '40px',
      height: '40px',
      display: this.state.isShow ? '' : 'none',
      zIndex: 1111,
      background: '#ccc',
      color: '#111'
    };
    return (
      <ScrollTo bindElement={window.document} selector={'.rsg--root-23'}>
        {({ handleScroll }) => {
          return (
            <button style={style} onClick={handleScroll} ref={(ref) => (this.ref = ref)}>
              ^
            </button>
          );
        }}
      </ScrollTo>
    );
  }
}

function ScrollToExample({ show }) {
  const [demoShow, setDemoShow] = React.useState(show);
  const demoString = demoShow ? 'hidden' : 'show';
  return (
    <React.Fragment>
      <Button onClick={() => setDemoShow(!demoShow)}>
        {' '}
        click me to {demoString} scrollto component use{' '}
      </Button>

      {demoShow ? <BackToTop /> : null}
    </React.Fragment>
  );
}
<ScrollToExample show={false} />;
```
