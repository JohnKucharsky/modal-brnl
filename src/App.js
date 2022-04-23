import { useState } from "react";
import Modall from "./Modall";
import "./modal.scss";
import { Box, Modal } from "@mui/material";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="app">
      <button onClick={() => setOpenModal(!openModal)}>Open Modal</button>
      {openModal && (
        <Modall
          setOpenSuccess={setOpenSuccess}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      <Modal
        open={openSuccess}
        onClose={() => setOpenSuccess(false)}
        className="modal"
      >
        <Box sx={style}>
          <h3>Успешно Отправлено. Ждите звонка</h3>
        </Box>
      </Modal>
    </div>
  );
};

export default App;
