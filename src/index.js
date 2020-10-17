import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import EPG from './components/EPG';
import './index.css';
import './media-query.css';

const App = () => (
  <>
    <Header />
    <main className="container">
      <EPG />
    </main>
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));
