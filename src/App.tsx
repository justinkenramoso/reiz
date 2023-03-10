import React, { useEffect, useState } from "react";
import Grid from "./components/Grid";
import Pagination from "./components/Pagination";
import "./css/output.css";
import axios from "axios";

const buttonClass =
  "font-bold rounded-full inline-block py-2 px-5 mr-3 bg-green-200 text-color1 shadow hover:bg-green-500 transition-all w-full lg:w-auto";
const activeClass =
  "font-bold rounded-full inline-block py-2 px-5 mr-3 text-color1 bg-green-400 w-full lg:w-auto";

function App() {
  // States
  const [data, setData] = useState<any[]>([]);
  const [backup, setBackup] = useState<any[]>([]);
  const [order, setOrder] = useState("asc");
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

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
                className={filter === "all" ? activeClass : buttonClass}
                onClick={() => {
                  setOrder("asc");
                  setCurrentPage(1);
                  setFilter("all");
                  setData(backup);
                }}
              >
                All
              </button>
              <button
                className={filter === "lith" ? activeClass : buttonClass}
                onClick={() => {
                  setOrder("asc");
                  setCurrentPage(1);
                  setFilter("lith");
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
                className={filter === "oceania" ? activeClass : buttonClass}
                onClick={() => {
                  setOrder("asc");
                  setCurrentPage(1);
                  setFilter("oceania");
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
        <Grid data={data.slice(firstPostIndex, lastPostIndex)} />
        <Pagination
          totalPosts={data.length}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
