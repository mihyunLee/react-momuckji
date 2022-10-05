import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";

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
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
  }
  #root{
    width: 100%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
