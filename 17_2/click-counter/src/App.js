import React from 'react';
import Button from './components/Button'; 
import ClickViewer from './components/ClickViewer';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Button />
        <ClickViewer />
      </Provider>
    </div>
  );
}

export default App;
