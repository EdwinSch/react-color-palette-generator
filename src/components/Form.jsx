import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");

  const handleSumbit = (event) => {
    event.preventDefault();
    addColor(color);
  };

  return (
    <section className="container">
      <h4>color generator</h4>
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
  );
};

export default Form;
