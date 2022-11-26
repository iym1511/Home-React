import './App.css';
import Reciept from './components/Reciept';
import View from './components/View';
import { DataProvider } from './data/DataContext'
import Asd from './pages/Asd';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <DataProvider>
        <View />
        <Reciept />
      </DataProvider>
      
    </div>
  );
}

export default App;
