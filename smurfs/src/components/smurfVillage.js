import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";

import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";

const SmurfVillage = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, [fetchSmurfs]);

  console.log(props);

  return (
    <div>
      <h1>Add your own Smurf!</h1>
      <div>
        <SmurfForm />
      </div>
      {props.smurfs.map(smurf => (
        <Smurf smurf={smurf} />
      ))}
      <div></div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfVillage);
