import './App.css';

import {Bar} from './Component/Bar/Bar'
import {StockMarket} from './Component/StockMarket/StockMarket'
function App() {
  return (
    <div>
      <Bar/>
      <div className="App">
        <StockMarket className="stock"/>
        <div className="main">MainBar</div>
        <div className="tool">ToolBar</div>
      </div>
    </div>
  );
}

export default App;
