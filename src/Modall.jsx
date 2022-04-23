import { Box, Switch, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useState } from "react";
import "./modal.scss";
import Increment from "./components/Increment";
import { MobileDatePicker } from "@mui/lab";
import { IMaskInput } from "react-imask";
import Icon from "./components/Icon";
import Person from "./components/Person";
import { AiOutlineClose } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Modall = ({ setOpenModal, openModal }) => {
  const [date, setDate] = useState(new Date());
  const [duration, setDuration] = useState(1);
  const [children, setChildren] = useState(1);
  const [grown, setGrown] = useState(1);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [diff, setDiff] = useState(true);
  const [agree, setAgree] = useState(false);
  const handleChangeDate = (val) => {
    setDate(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = {
      date,
      duration,
      children,
      grown,
      phone,
      name,
      diff,
      agree,
    };
    emailjs.send(
      "service_338bhe1",
      "template_29vrtub",
      data,
      "yksvOEorfKNnkaCqx"
    );

    setTimeout(() => {
      setOpenModal(false);
    }, 2000);
  };
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      className="modal open"
    >
      <Box className="modal__round">
        <div onClick={() => setOpenModal(false)} className="modal__close">
          <AiOutlineClose /> <span>ЗАКРЫТЬ</span>
        </div>
        <div className="modal__container">
          <div className="modal__header">
            <h2>Свободная путевка</h2>
            <p>
              Укажите дату, продолжительность и кол-во гостей, мы подберем
              оптимальную путевку в этом или аналогичном санатории
            </p>
          </div>
          <div className="modal__content">
            <div className="modal__top">
              <div className="modal__content--dates">
                <div className="modal__content--date">
                  <p>Дата заезда</p>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      label=""
                      value={date}
                      onChange={handleChangeDate}
                      renderInput={(params) => (
                        <TextField {...params} sx={{ width: "100%" }} />
                      )}
                    />
                  </LocalizationProvider>
                </div>
                <div className="width">
                  <p>Продолжительность</p>
                  <div className="modal__content--last">
                    {duration}
                    {duration === 1 && " День"}
                    {duration > 1 && duration < 5 && " Дня"}
                    {duration > 4 && " Дней"}

                    <Increment
                      s={1}
                      duration={duration}
                      setDuration={setDuration}
                    />
                  </div>
                </div>
              </div>
              <div className="modal__content--quantity">
                <div className="width">
                  <p>Сколько взрослых?</p>
                  <div className="modal__content--grown">
                    <div className="modal__content--person">
                      <Person />
                    </div>
                    <div>
                      {grown === 0 && "Без Взрослых"}
                      {grown === 1 && "Один Взрослый"}
                      {grown > 1 && `${grown} Взрослых`}
                      <Increment s={2} grown={grown} setGrown={setGrown} />
                    </div>
                  </div>
                </div>
                <div className="width">
                  <p>Сколько детей?</p>
                  <div className="modal__content--childs">
                    <div>
                      {children === 0 && "Без Детей"}
                      {children === 1 && "Один Ребенок"}
                      {children > 1 && `${children} Детей`}

                      <Increment
                        s={3}
                        children={children}
                        setChildren={setChildren}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="modal__content--number">
                <div className="modal__content--num">
                  <IMaskInput
                    mask="+{7}(000)000-00-00"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="modal__content--name">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="ФИО"
                    required
                  />
                </div>
              </div>
              <div className="modal__footer">
                <div className="modal__footer--switch">
                  <div>
                    <Switch
                      value={diff}
                      defaultChecked={true}
                      checkedIcon={<Icon />}
                      onChange={(e) => setDiff(e.target.checked)}
                    />
                    <p>Рассмотрю другие санатории</p>
                  </div>
                  <div>
                    <Switch
                      value={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      checkedIcon={<Icon />}
                    />

                    <p>Согласен получать информацию о новостях и скидках</p>
                  </div>
                </div>
                <div className="modal__footer--submit">
                  <button>НАЙТИ</button>
                  <p>
                    Нажимая "Найти", вы даёте согласие на обработку персональных
                    данных в соответствии с
                    <span>политикой конфиденциальности</span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default Modall;
