import React from "react";
import Country from "../components/Country";

interface Props {
  data: Array<Type>;
}

interface Type {
  name: string;
  alpha2Code: string;
  region: string;
  area: number;
  independent: boolean;
}

const Grid: React.FC<Props> = (data) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-10 mt-10 pb-10">
        {data.data.map((country, index) => {
          return (
            <Country
              key={index}
              name={country.name}
              area={country.area}
              region={country.region}
              code={country.alpha2Code}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
