import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FirstSection from "./firstSection";
import Section2 from "./Section-2";
import Section3 from "./Section-3";
import Section4 from "./Section-4";
import Section5 from "./Section-5";
import Section6 from "./Section-6";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.css";

function App() {
  return (
    <div>
      <Header />
      <FirstSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}

export default App;
