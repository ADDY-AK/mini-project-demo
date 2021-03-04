import './App.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import MiddleSection from './components/MiddleSection';

function App() {
  return (
    <div className="App">
      <Header />
      <MiddleSection />
      <AboutUs />
      {/* <Courosel /> */}
    </div>
  );
}

export default App;
