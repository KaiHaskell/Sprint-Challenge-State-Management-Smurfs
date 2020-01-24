import React, { useEffect } from "react";

import { connect } from "react-redux";
import { fetchSmurfs } from "../utils/actions";

import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

const SmurfVillage = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, [fetchSmurfs]);

  return (
    <div>
      <SmurfForm />
      {props.smurfs.map(smurf => (
        <SmurfList smurf={smurf} />
      ))}
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
