import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import ErrorFetch from "./components/ErrorFetch";

function App() {
  const [location, setLocation] = useState();
  const [locationInput, setlocationInput] = useState();
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    /* 
    const randomLocation = Math.floor(Math.random() * 126) + 1;
    const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`;
     */
    let URL;

    if (locationInput) {
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`;
    } else {
      const randomLocation = Math.floor(Math.random() * 126) + 1;
      URL = `https://rickandmortyapi.com/api/location/${randomLocation}`;
    }

    axios
      .get(URL)
      .then((res) =>{
         setLocation(res.data)
         sethasError(false)
        })
      .catch(err => {
        sethasError(true)
        console.log(err)
      })

  }, [locationInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setlocationInput(e.target.inputSearch.value);
  };

  return (
    <div className="App">
      <h1>Rick and Morty</h1>

      <form onSubmit={handleSubmit}>
        <input id="inputSearch" type="text" />
        <button>Search</button>
      </form>
      {hasError ? (
        <ErrorFetch />
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="residents-container">
            {location?.residents.map((url) => (
              <ResidentCard key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
