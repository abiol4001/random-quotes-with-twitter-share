import { TwitterShareButton } from "react-share";
import { FaTwitterSquare, FaQuoteLeft } from "react-icons/fa";
import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  

  const [allJokes, setAllJokes] = useState([]);
  const [joke, setJoke] = useState({
    text:
      "Let yourself be silently drawn by the stronger pull of what you really love.",
    author: "Rumi"
  });
  useEffect(() => {
    async function getJokes() {
      const res = await fetch("https://type.fit/api/quotes");
      const data = await res.json();
      // console.log(data[0].text)
      setAllJokes(data);
    }
    getJokes();
  }, []);

  const getJoke = () => {
    const randomNumber = Math.floor(Math.random() * allJokes.length);
    // const url = allJokes[randomNumber]
    setJoke(allJokes[randomNumber]);
  };

  const color = [
    "blue",
    "#00FF00",
    "black",
    "purple",
    "red",
    "green",
    "grey",
    "violet",
    "indigo",
    "orange",
    "#607D8B",
    "#FFC107",
    "#E91E63",
    "#03A9F4"
  ];

  var randomNum = Math.floor(Math.random() * color.length);
  var randomColor = color[randomNum];

  return (
    <div className="App" style={{ backgroundColor: randomColor }}>
      <div id="quote-box">
        <div style={{ color: randomColor }}>
          <p id="text" style={{ fontSize: "26px", fontWeight: "700" }}>
            <FaQuoteLeft size={22} /> {joke.text}
          </p>
          <p id="author" style={{ fontSize: "22px" }}>
            -{joke.author}
          </p>
        </div>
        <div className="buttons">
          <TwitterShareButton
            url=" "
            title={`${joke.text}   by ${joke.author}`}
          >
            <FaTwitterSquare
              size={32}
              borderRadius={5}
              style={{ color: randomColor }}
            />
          </TwitterShareButton>
          <button
            style={{ backgroundColor: randomColor }}
            className="new--quote"
            onClick={getJoke}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}
