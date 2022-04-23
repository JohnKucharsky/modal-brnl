import { useState } from "react";
import Modall from "./Modall";
import "./modal.scss";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="app">
      <button onClick={() => setOpenModal(!openModal)}>Open Modal</button>
      {openModal && (
        <Modall openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default App;
