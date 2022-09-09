import PropTypes from "prop-types";
import React from "react";
import Button from "../ui/Button";

const HistoryItem = ({ onClick, disabled, history }) => {
  return (
    <li>
      <p>
        Operations: {history.inputs.a} {history.operation} {history.inputs.b}{" "}
        Result:{history.result}
      </p>

      <small>{history.date.toLocaleString()}</small>
      <br />
      <Button text="Restore" onClick={onClick} disabled={disabled} />
    </li>
  );
};

HistoryItem.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  history: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    inputs: PropTypes.shape({
      a: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
    }).isRequired,
    result: PropTypes.number.isRequired,
    operation: PropTypes.string.isRequired,
  }).isRequired,
};

HistoryItem.defaultProps = { disabled: false };

export default HistoryItem;
