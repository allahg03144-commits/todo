import React from "react";

const Alert = ({ alert }) => {
  return (
    alert && (
      <div className={`alert alert-${alert.ty} alert-dismissible fade show`} role="alert">
        <strong>{alert.ty === "success" ? "Success!" : "Notice!"} </strong> {alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )
  );
};

export default Alert;
