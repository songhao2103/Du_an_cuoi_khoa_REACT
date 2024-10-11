import { useRef, useState } from "react";
import { BoxRightStyle } from "./boxRightStyle";

const BoxRight = () => {
  const inputElement = useRef(null);
  const [hiddenInput, setHiddenInput] = useState(false);

  const handleHiddenInput = () => {
    setHiddenInput(!hiddenInput);
  };

  return (
    <BoxRightStyle className="box_right">
      <div className="box_sign">
        <span className="desc_gray">Log In/</span>
        <span className="desc_gray">Register</span>
      </div>
      <div className="search">
        <input
          ref={inputElement}
          type="text"
          placeholder="Enter text"
          className={hiddenInput ? "active" : ""}
        />
        <div onClick={handleHiddenInput} className="icon_search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </BoxRightStyle>
  );
};

export default BoxRight;
