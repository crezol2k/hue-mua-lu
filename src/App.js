import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import SectionChart from "./components/SectionChart";
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section1 />
      <SectionChart />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;
