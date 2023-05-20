import { useState } from "react";

const Form = () => {
  const [color, setColor] = useState("");

  const handleSumbit = () => {
    return;
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
          placeholder="#f1f1502"
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
