```js
function ProgressExample({ present }) {
  const [show, setShow] = React.useState(false);
  const [presents, setPresents] = React.useState(present);
  const showString = show ? 'hidden' : 'show';

  return (
    <Button
      onClick={() => {
        setShow(!show);
        // setPresents(presents < 100 ? presents + 10 : presents - 30);

        let intervalId = setInterval(() => {
          setPresents((s) => {
            if (s > 100) {
              clearInterval(intervalId);
              return present;
            }
            return s + 10;
          });
        }, 2000);
      }}
    >
      click to {showString} progress
      {show ? <Progress present={presents || 30} /> : null}
    </Button>
  );
}
<ProgressExample present={40} />;
```
