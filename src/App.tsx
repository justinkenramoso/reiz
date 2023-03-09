import React from "react";
import "./css/output.css";

function App() {
  return (
    <div className="bg-color4 min-h-screen pt-5 px-5">
      <div className="container m-auto">
        <div className="p-0 m-0 bg-color1 text-color4 rounded">
          <h2 className="p-3 text-3xl font-bold">Country Database</h2>
        </div>
        <div className="my-3">
          <div className="grid grid-cols-2">
            <div>
              <button className="font-bold rounded-full inline-block py-2 px-5 mr-3 bg-color2 text-color4">
                Smaller than Lithuania
              </button>
              <button className="font-bold rounded-full inline-block py-2 px-5 bg-color2 text-color4">
                Oceana Region
              </button>
            </div>
            <div className="ml-auto">
              <button className="font-bold rounded-full inline-block py-2 px-5 mr-3 bg-color2 text-color4">
                Ascending
              </button>
              <button className="font-bold rounded-full inline-block py-2 px-5 bg-color2 text-color4">
                Descending
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
