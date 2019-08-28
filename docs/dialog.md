```jsx
// initialState = { isOpen: false };
// <button onClick={() => setState({ isOpen: true })}>Open</button>;
// {
//   state.isOpen ? (
//     <Dialog>
//       {' '}
//       <h1 style={{ background: 'white' }}>aaa</h1>
//     </Dialog>
//   ) : null;
// }
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleOnclose = this.handleOnclose.bind(this);
  }
  handleOnclose() {
    console.log('active', this.state.isOpen);
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ isOpen: !isOpen });
          }}
        >
          tes
        </button>
        <Dialog visible={isOpen} duration={300} onClose={this.handleOnclose}>
          <Dialog.DialogContent
            style={{ backgroundColor: 'white' }}
            // maxHeight={'smaill'}
            maxWidth={'big'}
          >
            <Card align={'center'}>
              <Card.Header>Card Header</Card.Header>
              <Card.Body>
                <Heading.P>test</Heading.P>
                <Button
                  normal
                  onClick={() => {
                    this.setState({ isOpen: !isOpen });
                  }}
                >
                  cancel
                </Button>
                <Button
                  normal
                  onClick={() => {
                    alert('comfirm');
                  }}
                >
                  comfirm
                </Button>
              </Card.Body>
              <Card.Footer>Card body</Card.Footer>
            </Card>
          </Dialog.DialogContent>
        </Dialog>
      </div>
    );
  }
}
<Example />;
// <Dialog />
```
