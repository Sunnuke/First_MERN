import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="person/"/>
        <Detail path="person/:id" />
      </Router>
    </div>
  );
}
export default App;
