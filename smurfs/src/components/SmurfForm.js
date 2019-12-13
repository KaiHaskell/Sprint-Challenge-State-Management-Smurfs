import React, { useState } from "react";
import { connect } from "react-redux";

import { newSmurf } from "../actions/index";

const SmurfForm = props => {
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

  const handleChanges = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.newSmurf(smurf);
    setSmurf({ name: "", age: "", height: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          maxLength="12"
          type="text"
          name="name"
          id="smurfname"
          onChange={handleChanges}
          placeholder="name"
          value={smurf.name}
          required
        />
      </label>
      <label>
        Age
        <input
          maxLength="12"
          type="text"
          name="age"
          id="smurfage"
          onChange={handleChanges}
          placeholder="age"
          value={smurf.age}
          required
        />
      </label>
      <label>
        Height
        <input
          maxLength="12"
          type="text"
          name="height"
          id="smurfheight"
          onChange={handleChanges}
          placeholder="height"
          value={smurf.height}
          required
        />
      </label>
      <button onClick={handleSubmit}>Smurf It Up</button>
    </form>
  );
};

export default connect(null, { newSmurf })(SmurfForm);
