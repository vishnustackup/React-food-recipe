import React from "react";
import './Notfound.scss'
const Notfound = () => {
  return (
    <div className="not-found my-5">
      <div className={"container flex align-center justify-center wrong-search" }>
        No food found.
      </div>
    </div>
  );
};

export default Notfound;
