import { Helmet } from 'react-helmet';
import './App.css';
import StockAvg from './Components/StockAvgCal/StockAvg';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Stock Average Calculator</title>
        <meta name="description" content="Calculate the average stock price over a period of time with our Stock Average Calculator. Analyze your investment performance and make informed decisions for your portfolio." />
        <meta name="keywords" content="stock average calculator, average stock price, investment analysis, portfolio management, stock market tool, finance calculator, investment calculator" />
      </Helmet>
      <StockAvg />
    </div>
  );
}

export default App;
