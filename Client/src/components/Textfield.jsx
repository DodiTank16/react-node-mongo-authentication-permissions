import React from "react";

const Textfield = ({ name, className, ...props }) => {
  return <input type="text" className={className} name={name} {...props} />;
};

export default Textfield;
