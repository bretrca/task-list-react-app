import React, { useState } from "react";
import FormComponent from "./Form/formComponent";
import ListComponent from "./ListComponent";
import "../App.css";

function ContainerComponent() {
  const [inputValue, setInputValue] = useState([]);

  function updateList(updatedElement) {
    let newArr = [...inputValue];
    const index = newArr.findIndex(
      (element) => element.id === updatedElement.id
    );
    newArr[index] = {
      ...inputValue[index],
      description: updatedElement.description,
    };
    setInputValue(newArr);
  }
  return (
    <>
      <h1 className="title App-header">Task list </h1>
      <FormComponent formHandler={setInputValue} />
      <ListComponent
        handlerList={inputValue}
        setInputValue={setInputValue}
        handlerUpdate={updateList}
      />
    </>
  );
}

export default ContainerComponent;
