import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemedApp from './ThemedApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ThemedApp>
      <App />
    </ThemedApp>,
    document.getElementById('root'));
registerServiceWorker();
