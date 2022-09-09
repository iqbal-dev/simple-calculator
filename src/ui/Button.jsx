import PropTypes from "prop-types";
import React from "react";

const Button = ({ text, onClick, disabled }) => {
  const disabledStyle = {
    backgroundColor: "#999",
    color: "#333",
    cursor: "not-allowed",
  };
  const style = {
    padding: ".25rem 1rem",
    backgroundColor: "#ddd",
    color: "#212121",
    borderRadius: ".1rem",
    border: "1px solid #f3eaea ",
    cursor: "pointer",
    ...(disabled && disabledStyle),
  };
  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
