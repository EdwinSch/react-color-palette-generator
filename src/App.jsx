import Form from "./components/Form";
import ColorList from "./components/ColorList";

import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const App = () => {
  const [colors, setColors] = useState(new Values("#13c34e").all(10));

  const addColor = (color) => {
    try {
      let newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" autoClose={2000} />
    </main>
  );
};
export default App;
