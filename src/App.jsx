import { useState } from 'react';

export default function App() {
  const initialBoxesArray = [[1, 2, 3], [4], [5, 6, 7]];
  const [clickedBoxed, setClickedBoxes] = useState([]);

  console.log(clickedBoxed);
  // Box component start
  const Box = ({ id }) => {
    const boxStyle = {
      width: '50px',
      height: '50px',
      border: '1px solid black',
      cursor: 'pointer',
      background: clickedBoxed.includes(id) ? 'green' : 'white',
    };

    const handleClick = () => {
      if (!clickedBoxed.includes(id)) {
        setClickedBoxes((prev) => [...prev, id]);
      }
    };

    return (
      <div
        key={id}
        style={boxStyle}
        id={id}
        onClick={() => handleClick()}
      ></div>
    );
  }; // End of box component

  if (clickedBoxed.length === initialBoxesArray.flat().length) {
    for (let i = 1; i <= initialBoxesArray.flat().length; i++) {
      setTimeout(() => {
        const arr = clickedBoxed.slice(i);
        setClickedBoxes(arr);
      }, i * 1000);
    }
  }

  // let timer;
  // const ToggleTiles = () => {
  //   timer = setInterval(() => {
  //     setClickedBoxes((prev) => prev.slice(1));
  //   }, 1000);

  //   if (clickedBoxed.length === 0) {
  //     clearInterval(timer);
  //   }
  // };

  // useEffect(() => {
  //   ToggleTiles();
  //   return () => clearInterval(timer);
  // }, [clickedBoxed]);

  const rowStyle = {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
  };

  return initialBoxesArray.map((row, index) => {
    return (
      <div key={index} style={rowStyle}>
        {row.map((box) => (
          <Box key={box} id={box} />
        ))}
      </div>
    );
  });
}
