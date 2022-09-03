import { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";

function App() {
  const Input = () => {
    return (
      <div className="input">
        <input type="number" className="value" placeholder="Value" required />
        <input
          type="number"
          className="frequency"
          placeholder="Frequency"
          required
        />
      </div>
    );
  };

  const [inputList, setInputList] = useState([<Input key="0" />]);

  const [median, setMedian] = useState("");

  const addItemHandler = () => {
    setInputList([...inputList, <Input key={inputList.length} />]);
  };

  const removeItemHandler = () => {
    setInputList([...inputList.slice(0, inputList.length - 1)]);
  };

  const frequencies = document.getElementsByClassName("frequency");
  const values = document.getElementsByClassName("value");

  let arr1 = [];
  let arr2 = [];

  const medianCalculator = () => {
    arr1 = [];
    arr2 = [];

    for (let j = 0; j < values.length; j++) {
      arr1.push(parseInt(values[j].value));
    }

    for (let i = 0; i < frequencies.length; i++) {
      arr2.push(parseInt(frequencies[i].value));
    }

    arr1.sort(function (a, b) {
      return a - b;
    });
    result();
  };

  const result = () => {
    let index = 0;
    let value;
    let freq = 0;
    let freq2;
    let ifEven;
    let freqValue = arr2[index];

    for (let i = 0; i < arr2.length; i++) {
      freq += arr2[i];
    }

    if (freq % 2 === 0) {
      ifEven = true;
    } else {
      ifEven = false;
    }

    if (!ifEven) {
      freq = freq + 1;
      freq = freq / 2;
    } else {
      freq2 = freq / 2 + 1;
      freq = freq / 2;
    }

    for (let i = 0; i < freq; i++) {
      freqValue -= 1;
      if (freqValue === 0) {
        index++;
        freqValue = arr2[index];
      }

      value = arr1[index];
    }
    setMedian(value);
  };

  return (
    <Container className="Container" fluid>
      <h1>Median Calculator</h1>
      <div className="valueFrequency">
        <h1>Value</h1>
        <h1>Frequency</h1>
      </div>
      {inputList}
      <div className="buttons">
        <button className="add" onClick={() => addItemHandler()}>
          + Add a new value
        </button>
        <button className="remove" onClick={() => removeItemHandler()}>
          - Remove a value
        </button>
      </div>
      <input
        type="submit"
        className="submit"
        onClick={() => {
          medianCalculator();
        }}
      />
      <h1>Median: {median}</h1>
    </Container>
  );
}

export default App;
