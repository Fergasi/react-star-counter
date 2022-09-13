import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import StarCounter from "./Components/StarCounter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <StarCounter />
      <Footer />
    </div>
  );
}

export default App;
