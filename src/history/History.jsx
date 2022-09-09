import PropTypes from "prop-types";
import React from "react";
import HistoryItem from "./HistoryItem";

const History = ({ histories, historyId, handleReStore }) => {
  return (
    <div>
      <p>history</p>
      {histories.length === 0 ? (
        <small>There is no history</small>
      ) : (
        <ul>
          {histories.map((history) => (
            <HistoryItem
              key={history.id}
              onClick={() => handleReStore(history)}
              disabled={historyId === history.id}
              history={history}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.object.isRequired,
      inputs: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
      }).isRequired,
      result: PropTypes.number.isRequired,
      operation: PropTypes.string.isRequired,
    }).isRequired
  ),
  handleReStore: PropTypes.func.isRequired,
  historyId: PropTypes.string,
};

export default History;
