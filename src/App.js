import { useState } from "react";
import Modall from "./Modall";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const data = {
    date: "",
    duration: "",
    grown: "",
    children: "",
    tel: "",
    name: "",
    diff: false,
    mail: false,
  };
  console.log(data);
  return (
    <div>
      <button onClick={() => setOpenModal(!openModal)}>Open Modal</button>
      {openModal && (
        <Modall data={data} openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default App;
