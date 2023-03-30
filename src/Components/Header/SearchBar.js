import React, { useState } from "react";
import Form from "react-bootstrap/Form";
export default function SearchBar({ inputValue, updateInputValue }) {
  const handleOnChange = function (event) {
    updateInputValue(event.target.value);
  };
  return (
    <div>
      <Form.Control
        className="mb-3"
        type="text"
        style={{ width: "300px" }}
        placeholder="what movie you're searchin for ?"
        value={inputValue}
        onChange={handleOnChange}
      />
    </div>
  );
}
