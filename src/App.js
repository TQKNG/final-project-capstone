import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {useState}from 'react';
import Header from './components/Header';
import Hero from './components/Hero';



function App() {
  const [sections, setSections] = useState(
    [
      {
        title: "Home",
        url:"#Home"
      },
      {
        title: "About",
        url:"#About"
      },
      {
        title: "Menu",
        url:"#Menu"
      },
      {
        title: "Reservations",
        url:"#Reservations"
      },
      {
        title: "Order Online",
        url:"#OrderOnline"
      },
      {
        title: "Login",
        url:"#Login"
      }
    ]
  )
  return (
    <div style={{width:"100vw", height:"100vh"}}>
      <Header sections={sections}/>
      <Hero/>
    </div>
  );
}

export default App;
