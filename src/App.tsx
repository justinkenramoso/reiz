import React, { useEffect, useState } from "react";
import "./css/output.css";
import Country from "./components/Country";
import axios from "axios";

const buttonClass =
  "font-bold rounded-full inline-block py-2 px-5 mr-3 bg-green-200 text-color1 shadow hover:bg-green-500 transition-all";
const activeClass =
  "font-bold rounded-full inline-block py-2 px-5 mr-3 text-color1 bg-green-400";

function App() {
  // Data
  const [data, setData] = useState<any[]>([]);
  const [backup, setBackup] = useState<any[]>([]);
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    // API Call
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,region,area,alpha2Code"
      )
      .then(function (response) {
        // handle success
        setData(response.data);
        setBackup(response.data);
        console.log("api");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  // Sorting
  function handleAscending() {
    const sorted = data.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    setData(sorted);
    setOrder("asc");
  }

  function handleDescending() {
    const sorted = data.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return 1;
      }
      if (fa > fb) {
        return -1;
      }
      return 0;
    });
    setData(sorted);
    setOrder("desc");
  }

  return (
    <div className="bg-color4 min-h-screen pt-5 px-5">
      <div className="container m-auto">
        {/* Headers-----------------------------------------------------------> */}
        <div className="bg-color1 text-white rounded">
          <h2 className="p-3 text-3xl font-bold">COUNTRY DATABASE</h2>
        </div>
        <div className="my-3">
          <div className="grid grid-cols-2">
            <div>
              <button
                className={buttonClass}
                onClick={() => {
                  window.location.reload();
                }}
              >
                All
              </button>
              <button
                className={buttonClass}
                onClick={() => {
                  setData(backup);
                  const lithuania = data.find(
                    (country) => country.name === "Lithuania"
                  );
                  const smallerThanLithuania = data.filter(
                    (country) => country.area < lithuania.area
                  );
                  setData(smallerThanLithuania);
                }}
              >
                Smaller than Luthiania
              </button>
              <button
                className={buttonClass}
                onClick={() => {
                  setData(backup);
                  const oceaniaCountries = data.filter((country) => {
                    return country.region === "Oceania";
                  });
                  setData(oceaniaCountries);
                }}
              >
                Oceania Region
              </button>
            </div>
            <div className="ml-auto">
              <button
                className={order === "asc" ? activeClass : buttonClass}
                onClick={handleAscending}
              >
                Ascending
              </button>
              <button
                className={order === "desc" ? activeClass : buttonClass}
                onClick={handleDescending}
              >
                Descending
              </button>
            </div>
          </div>
        </div>
        {/* Results-----------------------------------------------------------> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-10 mt-10 pb-10">
          {data.map((country, index) => {
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
    </div>
  );
}

export default App;
