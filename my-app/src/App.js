import React from 'react';
import News from './components/news/news';
import AddNews from './components/news/addNews';

function App(props) {
  return (
    <div className="App">
      <section className="container">
        <div className="row">
          <div className="col-12" id="clock_id">
            <AddNews 
            title={props.data.newsAddData.title}
            content={props.data.newsAddData.content}
            dispatch={props.dispatch}/>
            <News news={props.data.news} 
            orderMessage={props.data.orderMessage}
            dispatch={props.dispatch} />
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;

