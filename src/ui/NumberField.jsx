import PropTypes from "prop-types";
import React from "react";

function NumberField({ name, value, onChange }) {
  const style = {
    padding: ".25rem",
    border: "1px solid #ccc",
    borderRadius: ".15rem",
    outline: "none",
    width: "100%",
    backgroundColor: "#fff",
  };
  return (
    <input
      style={style}
      type="number"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

NumberField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberField;
