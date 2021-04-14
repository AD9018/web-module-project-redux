import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/featuredActions";

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => props.removeFeatures(props.feature)}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFeatures: (feature) => dispatch(removeFeature(feature)),
  };
};
export default connect(null, mapDispatchToProps)(AddedFeature);
