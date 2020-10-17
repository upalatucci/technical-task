import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Spinner from './components/Spinner';
import './index.css';
import './media-query.css';

const EPG = React.lazy(() => import(/* webpackChunkName: "EPG" */'./components/EPG'));

const App = () => (
  <>
    <Header />
    <main className="container">
      <Suspense fallback={<Spinner />}>
        <EPG />
      </Suspense>
    </main>
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));
