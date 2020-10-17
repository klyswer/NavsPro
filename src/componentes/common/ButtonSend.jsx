import React from "react";
import spinner from "../assest/blue-spin.gif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const ButtonSend = ({
  svg,
  tagName,
  inputName,
  callBack,
  css,
  disable,
  setLoading,
}) => {
  const inEnable = (enable) => {
    let isInputEnable;
    switch (enable) {
      case true:
        isInputEnable = "";
        break;

      case false:
        isInputEnable = "disabled";
        break;

      default:
        isInputEnable = "";
    }
    return isInputEnable;
  };

  return (
    <>
      {setLoading ? (
        <div className="Loaders">
          {" "}
          <img className="spinner" src={spinner} alt="cargando" />{" "}
        </div>
      ) : (
        <button
          name={inputName}
          type="submit"
          className={css ? `buttonBasic ${css}` : "buttonBasic"}
          onClick={callBack}
          disabled={inEnable(disable)}
        >
          {" "}
          {tagName }
          {" "}
          {svg && <FontAwesomeIcon icon={faPaperPlane} />}
          {" "}
        </button>
      )}
    </>
  );
};

export default ButtonSend;
