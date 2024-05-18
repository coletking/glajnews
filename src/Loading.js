import React from "react";
import "./App.css";
function Loading({ showLoading }) {
  return (
    <div>
      {showLoading ? (
        <div>
          <div className="loadingcontainer">
            <div className="loadingcontent">
              <div className="imageside">
                <img src="/img/logo.png" alt="" />
              </div>
              <div className="testare">Loading...</div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Loading;
