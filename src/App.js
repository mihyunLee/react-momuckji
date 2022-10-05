import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
   @font-face {
      font-family: 'BMHANNAPro';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.0/BMHANNAPro.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  *{
    font-family: "BMHANNAPro";
  }
  body{
    background: #fff;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
