import Form from "./components/Form";
import ColorList from "./components/ColorList";

import Values from "values.js";
import { useState } from "react";

const App = () => {
  const [colors, setColors] = useState([]);

  console.log(new Values("#f15025").all(10));

  return (
    <main>
      <Form />
      <ColorList />
    </main>
  );
};
export default App;
