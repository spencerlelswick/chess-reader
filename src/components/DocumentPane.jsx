import React, { useState } from 'react';
import './AnnotationLayer.css';
import './TextLayer.css';
import { Document, Page, pdfjs } from "react-pdf";
import './DocumentPane.css'
import logo from '../assets/logo.png'
import Board from './Board';

const boardImg = require('../assets/board.png')

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

export default function Sample() {

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  
  const [file, setFile] = useState('./TEST2.pdf');
  const [numPages, setNumPages] = useState(null);
  const [currentBoard, setCurrentBoard] = useState(boardImg)

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  const handleItemClicked = (el) => console.log(el.target);

  return (
    <div className="Document">
      <header>
        <h1>CHESS READER</h1>
        {/* <h1><img id='logo' src={logo} />CHESS READER</h1> */}

        <div className="Document__container__load">
          <label htmlFor="file">Load from file:</label>{' '}
          <input onChange={onFileChange} type="file" />
        </div>
      </header>
      
      <div className='board-wrapper'>
        <Board currentBoard={currentBoard}/>
      </div>
      <div className="Document__container">
        
        <div className="Document__container__document">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page scale={3} onItemClick={() => {handleItemClicked(el)}} key={`page_${index + 1}`} pageNumber={index + 1} onClick={handleItemClicked} />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
