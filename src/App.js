import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Section1 from './Components/Section_1/section_1';
import Section2 from './Components/Section_2/Section_2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
       <Section1/>
       <Section2/>
      </header>
    </div>
  );
}

export default App;
