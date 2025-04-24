import './App.css';
import moengage from "@moengage/web-sdk";

moengage.initialize({app_id: 'Q9C4IODV9GQPFYNW66O01DC7', cluster: 'DC_1'});

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
       <p>Hello React</p>
      </header>
    </div>
  );
}

export default App;
