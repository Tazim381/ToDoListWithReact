function List({ results, deleteItem }) {
  return (
    <div className="list">
      {results.map(function (result, index) {
        return (
          <li key={index} className="showItem">
            <input type="checkbox"></input> {result}{" "}
            <button onClick={() => deleteItem(result)}>Delete</button>
          </li>
        );
      })}
    </div>
  );
}

export default List;
