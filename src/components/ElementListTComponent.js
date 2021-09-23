import React, { useState } from "react";
import "./../App.css";

function ElementListComponent({
  id,
  description,
  setInputValue,
  handlerUpdate,
}) {
  //hooks
  const [isEditing, setIsEditing] = useState(false);
  const [inputString, setInputString] = useState(description);

  function handleDeleteItem(e) {
    e.preventDefault();
    setInputValue((prevState) => {
      return prevState.filter((element) => element.id !== id);
    });
  }

  function toggleEditItem(e) {
    e.preventDefault();
    setIsEditing((prevState) => !prevState);
  }

  function handleModify(e) {
    e.preventDefault();
    const { value } = e.target;
    setInputString(value);
  }
  function handleSaveEdit(e) {
    e.preventDefault();
    handlerUpdate({
      id,
      description: inputString,
    });
    toggleEditItem(e);
  }

  return (
    <div className="ElementListComponent">
      {isEditing ? (
        <input value={inputString} onChange={handleModify}></input>
      ) : (
        <li>{description}</li>
      )}
      <div className="Buttons">
        {isEditing ? (
          <>
            <button onClick={handleSaveEdit} onSubmit={toggleEditItem}>
              Save
            </button>
            <button onClick={toggleEditItem}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleDeleteItem}>Delete</button>
            <button onClick={toggleEditItem}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
}

export default ElementListComponent;
