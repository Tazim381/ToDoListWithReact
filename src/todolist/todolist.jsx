import { useState } from "react";
import List from "./List";
import ListInput from "./ListInput";
import "./ListBuilder.css";

function Todolist() {
  const [value, setValue] = useState();
  const [result, showValue] = useState([]);
  function submit() {
    if (value === "") {
      alert("empty string");
      return;
    }
    if (result.find((item) => item === value)) {
      alert("String already exist");
      return;
    }
    showValue([...result, value]);
  }
  function addItem(event) {
    setValue(event.target.value);
  }
  function deleteItem(item) {
    const newResult = result.filter((name) => item !== name);
    console.log(item);
    showValue([...newResult]);
  }
  return (
    <div className="all">
      <div>
        <h1>Simple Todolist</h1>
      </div>
      <ListInput addItem={addItem} submit={submit} />

      <List results={result} deleteItem={deleteItem} />
      {console.log(result)}
    </div>
  );
}
export default Todolist;
