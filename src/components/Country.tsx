import React, { useState } from "react";

interface Props {
  name: string;
  area: number;
  region: string;
  code: string;
}

const Country: React.FC<Props> = ({ name, area, region, code }) => {
  return (
    <div className="p-3 bg-color3 text-color4 rounded text-xl">
      <h3 className="bg-white text-color1 py-1 text-center rounded font-bold">
        {name}
      </h3>

      <div className="grid grid-cols-2 py-3">
        <div>
          <h3>
            Region: <span className="text-white">{region}</span>
          </h3>
          <h3>
            Area: <span className="text-white">{area}</span>
          </h3>
        </div>
        <img
          className="w-20 h-20"
          src={"https://flagsapi.com/" + code + "/flat/64.png"}
          alt=""
        />
      </div>
      <img src="" alt="" />
    </div>
  );
};

export default Country;
