import { useState, useEffect } from "react";

const ValidatedInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!inputValue) {
      setError(true);
      setErrorMessage("Name is require*");
    } else {
      setError(false);
      setErrorMessage("");
    }
  }, [inputValue, errorMessage]);
  const handeSubmit = () => {
    if (!inputValue.trim()) {
      setError(true);
      setErrorMessage("Name is require*");
    } else {
      setError(false);
      setErrorMessage("");
    }
  };
  return (
    <>
      <h2 style={{ color: "#000" }}>Form Input Validation</h2>
      <div>
        <input
          style={{ height: "2rem", width: "100%" }}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Name"
        />
        {error && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
      <button onClick={handeSubmit}>Add</button>
    </>
  );
};

export default ValidatedInput;
