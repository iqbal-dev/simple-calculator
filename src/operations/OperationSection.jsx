import PropTypes from "prop-types";
import React from "react";
import shortId from "shortid";
import Button from "../ui/Button";
const OperationSection = ({ handleArithmeticOPs, handleClearOPs }) => {
  const operations = [
    {
      id: shortId.generate(),
      text: "+",
      onClick: () => handleArithmeticOPs("+"),
    },
    {
      id: shortId.generate(),
      text: "-",
      onClick: () => handleArithmeticOPs("-"),
    },
    {
      id: shortId.generate(),
      text: "/",
      onClick: () => handleArithmeticOPs("/"),
    },
    {
      id: shortId.generate(),
      text: "%",
      onClick: () => handleArithmeticOPs("%"),
    },
    {
      id: shortId.generate(),
      text: "clear",
      onClick: () => handleClearOPs(),
    },
  ];
  return (
    <div>
      <p>operations</p>
      <div style={{ display: "flex", gap: ".5rem" }}>
        {operations.map((operation) => (
          <Button
            key={operation.id}
            text={operation.text}
            onClick={operation.onClick}
          />
        ))}
      </div>
    </div>
  );
};

OperationSection.propTypes = {
  handleClearOPs: PropTypes.func.isRequired,
  handleArithmeticOPs: PropTypes.func.isRequired,
};

export default OperationSection;
