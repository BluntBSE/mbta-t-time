import logo from './logo.svg';
import './App.scss';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

function App() {
  return (
    <div className="App">
        <header className="site-header">
      Welcome to T-Time
        
      </header>

      <div className="site-wrap">

        <div className="stop-panel">
          <div className="stop-banner">I am the banner</div>
          <div className="stop-controls">
          <Dropdown
          placeholder="Select an option"
          options={['one', 'two', 'three']}
          value="one"
          onChange={(value) => console.log('change!', value)}
          onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
          onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
          onOpen={() => console.log('open!')}
           />
          <Dropdown
          placeholder="Select an option"
          options={['one', 'two', 'three']}
          value="one"
          onChange={(value) => console.log('change!', value)}
          onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
          onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
          onOpen={() => console.log('open!')}
           />                 
          <Dropdown
          placeholder="Select an option"
          options={['one', 'two', 'three']}
          value="one"
          onChange={(value) => console.log('change!', value)}
          onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
          onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
          onOpen={() => console.log('open!')}
           />

           <div className = "go-button">Go</div>
           
           </div>
          <div className="stop-content">
              <div className="stop-section">
              <h2>Outbound</h2>
              <p>The next train to Alewife arrives in 10 Minutes and 58 seconds.</p>
              <p>The following train to Alewife arrives in 20 Minutes and 48 seconds.</p>
              </div>
              <div className="stop-section">
              <h2>Inbound</h2>
              <p>The next train to Braintree arrives in 10 Minutes and 58 seconds.</p>
              <p>The following train to Ashmont arrives in 20 Minutes and 48 seconds.</p>
              </div>
          
          </div>
        </div>
        <div className="alert-panel">
          <div className="stop-banner">I am the alert banner</div>
          <div className="alert-content">
          I am the alert content
          </div>

        </div>


      </div>
    </div>
  );
}

export default App;
