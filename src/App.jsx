import Navbar from "./components/navbar/Navbar";
import AccordionSlider from "./components/slider/Slider";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-gradient-to-br from-blue-50 via-sky-50 to-purple-50">
        <Home />
      </div>
      <AccordionSlider />
    </>
  );
}

export default App;
