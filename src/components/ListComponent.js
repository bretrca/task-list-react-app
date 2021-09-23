import React from "react";
import ElementListComponent from "./ElementListTComponent";
import "./../App.css";
function ListComponent({ handlerList, setInputValue, handlerUpdate }) {
  return (
    <ul>
      {handlerList.map((data) => (
        <ElementListComponent
          id={data.id}
          description={data.description}
          setInputValue={setInputValue}
          handlerUpdate={handlerUpdate}
        />
      ))}
    </ul>
  );
}

export default ListComponent;
