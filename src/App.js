import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useState } from "react";
import ResponsiveAppBar from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <ResponsiveAppBar />
      </header>
      <main>
        <Hero/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
