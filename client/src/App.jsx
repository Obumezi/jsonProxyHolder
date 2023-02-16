import React, { useEffect, useState } from "react";
import Posts from "./components/Posts";
/* import Posts1 from "./components/Posts1"; */
import Navbar from "./components/Navbar";

function App() {
  const [value, setValue] = useState("/posts");
  const [data, setData] = useState("");
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  useEffect(() => {
    const API_URL = `https://${window.location.hostname}:1338${value}`;
    fetch(API_URL)
      .then((t) => t.text())
      .then((data) => {
        setData(data);
      });
  }, [value]);

  return (
    <>
      <Navbar />

      <div>
        {/* <Cards/>  */}

        <h2
          style={{
            textAlign: "center",
            marginTop: "100px",
            fontWeight: "bold",
          }}
        >
          This is a simple application thats get data from JSON proxy holder and
          displays it
        </h2>

        <h2
          style={{
            textAlign: "center",
            marginTop: "100px",
            fontWeight: "bold",
          }}
        >
          Here are the Top 10 Post
        </h2>

        <button onClick={handleClick}>Post Title</button>
        <div style={{ display: "flex" }}>
          {isShown && <Posts />}
          {/* <Posts1 /> */}
        </div>
        {/* 
      <input
        type="text"
        placeholder="write the relative URL here to get data"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      /> */}
        {/*   <pre>{data}</pre> */}
      </div>
    </>
  );
}

export default App;
