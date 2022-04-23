import "../modal.scss";
const Increment = ({
  duration,
  setDuration,
  children,
  setChildren,
  grown,
  setGrown,
  s,
}) => {
  const handleInc = () => {
    if (s === 1) {
      setDuration(duration + 1);
    }
    if (s === 2) {
      setGrown(grown + 1);
    }
    if (s === 3) {
      setChildren(children + 1);
    }
  };
  const handleDec = () => {
    if (s === 1) {
      if (duration === 1) return;
      setDuration(duration - 1);
    }
    if (s === 2) {
      if (grown === 0) return;
      setGrown(grown - 1);
    }
    if (s === 3) {
      if (children === 0) return;
      setChildren(children - 1);
    }
  };
  return (
    <div className="increment">
      <svg
        onClick={() => handleInc()}
        width="11"
        height="6"
        viewBox="0 0 11 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M1 5L5.5 1L10 5"
          stroke="#8E8E8E"
          strokeLinecap="round"
        />
      </svg>
      <svg
        width="11"
        height="2"
        viewBox="0 0 11 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M10 1H1"
          stroke="#8E8E8E"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
      </svg>
      <svg
        onClick={() => handleDec()}
        width="11"
        height="6"
        viewBox="0 0 11 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M1 1L5.5 5L10 1"
          stroke="#8E8E8E"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Increment;
