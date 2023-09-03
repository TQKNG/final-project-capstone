import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ResponsiveAppBar from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ReservationForm from "./components/ReservationForm";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <header>
        <ResponsiveAppBar />
      </header>
        <section id="About">
          <Hero />
        </section>
        <section id="Menu">
          <Menu/>
        </section>
        <section id="Reservation">
          <ReservationForm />
        </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
