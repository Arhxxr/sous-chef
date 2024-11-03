import React, { useState } from "react";
import "../styles/TextInputPage.css";

function TextInputPage() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <div className="text-input-page">
      <h2>What do you want to cook?</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        className="text-input"
      />
      <button onClick={handleSubmit} className="arcade-button">
        Submit
      </button>
    </div>
  );
}

export default TextInputPage;