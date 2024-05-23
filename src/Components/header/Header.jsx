import React, { useState, useEffect, useRef } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import SpeechSynthesis from "speech-synthesis";
import HTMLFlipBook from "react-pageflip";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pageFlip from "./bookpage.mp3";
import "./style.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Header = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageText, setPageText] = useState([]);
  const flipBookRef = useRef(null);

  useEffect(() => {
    setPageNumber(1);
  }, [numPages]);

  useEffect(() => {
    console.log("Page Text: " + pageText);
  }, [pageText]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // const nextPage = () => {
  //   console.log("Next page clicked");
  //   if (flipBookRef.current && flipBookRef.current.flipNext) {
  //     setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages));
  //     flipBookRef.current.flipNext();
  //   }
  // };

  // const previousPage = () => {
  //   console.log("Previous page clicked");
  //   if (flipBookRef.current && flipBookRef.current.flipPrev) {
  //     setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  //     flipBookRef.current.flipPrev();
  //   }
  // };

  const speakPageText = () => {
    SpeechSynthesis.speak(pageText[pageNumber - 1]);
  };
  const handlePageChange = (e) => {
    const audioElement = new Audio(pageFlip);
    setPageNumber(e.data + 1);
    audioElement.play();
  };

  return (
    <div >
      <div>
        <Document
          file="./Adventure.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          renderMode="svg"
        >
          <HTMLFlipBook
            showCover={true}
            width={650}
            height={880}
            ref={flipBookRef}
            className="flip-book"
            onFlip={(e) => handlePageChange(e)}
            drawShadow={true}
            maxShadowOpacity={0.5}
            getOrientation={"landscape"}
            useMouseEvents={false}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div key={`page_${index + 1}`} style={{ height: "100%" }}>
                <Page
                  pageNumber={index + 1}
                  onLoadSuccess={(page) => {
                    page.getTextContent().then((textContent) => {
                      const pageContent = textContent.items
                        .map((item) => item.str)
                        .join(" ");
                      setPageText((prev) => {
                        const updatedText = [...prev];
                        updatedText[index] = pageContent;
                        return updatedText;
                      });
                    });
                  }}
                  renderTextLayer={true}
                />
              </div>
            ))}
          </HTMLFlipBook>
        </Document>
      </div>
      <p className="book">
        Page {pageNumber} of {numPages}
        <button onClick={() => flipBookRef.current.pageFlip().flipPrev()}>
          Previous
        </button>
        <button onClick={() => flipBookRef.current.pageFlip().flipNext()}>
          Next
        </button>
        <button onClick={speakPageText}>Speak Page</button>
      </p>
    </div>
  );
};

export default Header;
