import React from "react";
import Modal from "../modal";
import history from '../../history';

const StreamDelete = () => {
  const actions = (
      <React.Fragment>
      <button className="ui negative button">Delete</button>
      <button className="ui button">Cancel</button>
      </React.Fragment>
  );

  return (
    <div>
      Stream Delete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete ?"
        actions = {actions}
        onDismiss = {() => history.push('/')}
      />
    </div>
  );
};

export default StreamDelete;
