import React from 'react';
import AddNewsContainer from './components/news/addNewsContainer';
import NewsContainer from './components/news/newsContainer';

function App() {
  return (
    <div className="App">
      <section className="container">
        <div className="row">
          <div className="col-12" id="clock_id">
            <AddNewsContainer />
            <NewsContainer />
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;

