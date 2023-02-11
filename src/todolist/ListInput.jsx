function ListInput({ addItem, submit }) {
  return (
    <div className="input">
      <input type="text" onChange={addItem}></input>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
export default ListInput;
