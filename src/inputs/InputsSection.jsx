import PropTypes from "prop-types";
import React from "react";
import NumberField from "../ui/NumberField";
const InputsSection = ({ inputState, handleInputChange }) => {
  return (
    <div>
      <p>Inputs</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <NumberField
          name="a"
          value={inputState.a}
          onChange={handleInputChange}
        />
        <NumberField
          name="b"
          value={inputState.b}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

InputsSection.propTypes = {
  inputState: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default InputsSection;
