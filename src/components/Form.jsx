import { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");

  const handleSumbit = (event) => {
    event.preventDefault();
    addColor(color);
  };

  return (
    <>
      <section className="container">
        <h4>color palette generator</h4>

        <form className="color-form" onSubmit={handleSumbit}>
          <input
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
          <input
            type="text"
            value={color}
            id="color"
            placeholder="#f15025"
            onChange={(event) => setColor(event.target.value)}
          />
          <button className="btn" type="submit" style={{ background: color }}>
            submit
          </button>
        </form>
      </section>
      <div className="info">
        <AiFillInfoCircle className="icon" />
        <p>
          Enter any hex code in the inputfield or pick from the color picker.
          Click on a color result to clipboard copy.
        </p>
      </div>
    </>
  );
};

export default Form;
