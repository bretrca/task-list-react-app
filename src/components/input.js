import React from "react";

function Input({ id, onChange, value }) {
  return <input id={id} onChange={onChange} value={value} />;
}

export default Input;
