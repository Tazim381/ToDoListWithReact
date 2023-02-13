import { useState } from "react";

function List({ results, deleteItem }) {
  const [checked, setChecked] = useState([]);
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value),1);
    }
    setChecked(updatedList);
  };

  var isChecked =(item) => (
    checked.includes(item) ? "checked-item" : "not-checked-item"
  )

  return (
    <div className="list">
      {results.map(function (result, index) {
        return (
          <li key={index} className="showItem">
            <input
              type="checkbox"
              value={result}
              onChange={handleCheck}
            ></input>{" "}
            <span className={isChecked(result)}>{result}</span>
            <button onClick={() => deleteItem(result)}>Delete</button>
          </li>
        );
      })}
    </div>
  );
}

export default List;
