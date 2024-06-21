import './App.css';
import HandyCard from './components/cards/card';
import CreateNewCard from './components/createNewCard/CreateNewCard';

function App() {
  return (
    <div className="App">
      <CreateNewCard />
      <HandyCard />  
    </div>
  );
}

export default App;
