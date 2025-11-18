import ExerciseCard from "../../../../../components/ExerciseCard.jsx";
import StockTicker from "./components/StockTicker.jsx";
import "./styles.css";
export default function Exercise3() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={3} title="Live Stock Ticker" />

      <ExerciseCard.Description>
        {`
// TODO: Implement real-time stock price updates

function StockTicker() {
  // TODO: State
  // - stocks: array of { symbol, price, change }
  // - selectedStock: currently viewing
  // - priceHistory: array of historical prices
  // - isConnected: WebSocket status

  // TODO: Effects
  // 1. Connect to WebSocket (simulated)
  // 2. Subscribe to selected stocks
  // 3. Update prices in real-time
  // 4. Track price history
  // 5. Cleanup on unmount

  const [stocks, setStocks] = useState([
    { symbol: 'AAPL', name: 'Apple', price: 150.0, change: 0 },
    { symbol: 'GOOGL', name: 'Google', price: 2800.0, change: 0 },
    { symbol: 'MSFT', name: 'Microsoft', price: 300.0, change: 0 },
    { symbol: 'TSLA', name: 'Tesla', price: 700.0, change: 0 }
  ]);

  const [selectedStock, setSelectedStock] = useState('AAPL');
  const [priceHistory, setPriceHistory] = useState([]);

  // TODO: Simulate WebSocket updates
  useEffect(() => {
    // Update prices every 2 seconds
    // Random price changes (-5% to +5%)
    // Update stocks state
    // Track history for selected stock
  }, [selectedStock]);

  // TODO: Features
  // - Real-time price updates
  // - Price change indicators (↑ green, ↓ red)
  // - Price history chart (last 20 updates)
  // - Connection status indicator
  // - Add/remove stocks
  // - Alerts for price thresholds

  return (
    <div className="stock-ticker">
      <h1>Live Stock Ticker</h1>
      
      <div className="stock-list">
        {stocks.map(stock => (
          <div
            key={stock.symbol}
            className={\`stock-item \${selectedStock === stock.symbol ? 'selected' : ''}\`}
            onClick={() => setSelectedStock(stock.symbol)}
          >
            <h3>{stock.symbol}</h3>
            <p className="price">\${stock.price.toFixed(2)}</p>
            <p className={\`change \${stock.change >= 0 ? 'positive' : 'negative'}\`}>
              {stock.change >= 0 ? '↑' : '↓'} {Math.abs(stock.change).toFixed(2)}%
            </p>
          </div>
        ))}
      </div>

      <div className="price-chart">
        <h2>Lịch sử giá: {selectedStock}</h2>
        {/* TODO: Render price history */}
      </div>
    </div>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <StockTicker />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
