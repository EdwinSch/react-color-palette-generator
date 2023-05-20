import Form from "./components/Form";
import ColorList from "./components/ColorList";

import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  return (
    <main>
      <Form />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
