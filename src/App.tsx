import './App.css';
import Header from './components/header/Header';
import LeftSide from './components/left-side/LeftSide';
import RightSide from './components/right-side/RightSide';

function App() {
  return (
    <div className="App">
      <Header title="My App Header" />
      <div className="">
        <LeftSide/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
