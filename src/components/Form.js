import React, { useState, useRef } from "react";
import Button from "./Button";
import Select from "./DropDown";
export default function Form() {
  const [isSubmitted, setIsSubmited] = useState(false);
  const [state, setState] = useState({
    name: "",
    startLocation: "",
    destination: "",
  });
  const formRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmited(true);
    formRef.current.reset();
  }
  return (
    <>
      <form onSubmit={handleSubmit} ref={formRef} className="contact-form">
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => {
              setState({ ...state, name: e.target.value });
              setIsSubmited(false);
            }}
          />
        </div>
        <div className="form-control">
          <label> Your Home Town</label>
          <Select
            value={state.startLocation}
            onChange={(e) => {
              setState({ ...state, startLocation: e.target.value });
              setIsSubmited(false);
            }}
          />
        </div>
        <div className="form-control">
          <label> Where would you like to go?</label>
          <Select
            value={state.destination}
            onChange={(e) => {
              setState({ ...state, destination: e.target.value });
              setIsSubmited(false);
            }}
          />
        </div>
        <div className="form-control">
          <label>Contact Number</label>
          <input type="number" />
        </div>
        <Button value="SUBMIT INTEREST" />
      </form>
      {isSubmitted && (
        <div className="success-banner">
          <p>
            Thank you <strong>{state.name}</strong> for expressing your intrest
            in travelling with us.Our sales team will get back with the best
            packages from <strong>{state.startLocation}</strong> to{" "}
            <strong>{state.destination}</strong>.
          </p>
        </div>
      )}
    </>
  );
}
