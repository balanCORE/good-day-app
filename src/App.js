import React from "react";
import { useState } from "react";
import unsplash from "./unsplash";
import quoteData from "./quote";
import "./App.scss";
import { useEffect } from "react";

function App() {
  const [photo, setPhoto] = useState();
  const [quote, setQuote] = useState();

  async function getPhoto() {
    const response = await unsplash.get("photos/random", {
      params: { query: "city" },
    });
    setPhoto(response.data.urls.regular);
  }

  const randomNumber = Math.floor(Math.random() * 1643);
  async function getQuote() {
    const response = await quoteData.get();
    const { text, author } = response.data[randomNumber];
    console.log(text, author);
    setQuote({
      quote: text,
      author,
    });
  }

  document.documentElement.style.setProperty("--bg-img", `url(${photo})`);
  useEffect(() => {
    getPhoto();
    getQuote();
  }, []);
  return (
    <div className="App">
      <h1>{quote?.quote}</h1>
      <p>{`~${quote?.author}`}</p>
    </div>
  );
}

export default App;
