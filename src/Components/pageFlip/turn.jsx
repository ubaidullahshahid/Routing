import HTMLFlipBook from "react-pageflip";
import React from "react";
import "./style.css";

const FlipBook = () => {
  return (
    <HTMLFlipBook width={300} height={500} >
      <div className="flip-page">Page 1</div>
      <div className="flip-page">Page 2</div>
      <div className="flip-page">Page 3</div>
      <div className="flip-page">Page 4</div>
      <div className="flip-page">Page 5</div>
      <div className="flip-page">Page 6</div>
      <div className="flip-page">Page 7</div>
      <div className="flip-page">Page 8</div>
      <div className="flip-page">Page 9</div>
      <div className="flip-page">Page 10</div>
    </HTMLFlipBook>
  );
};
export default FlipBook;
