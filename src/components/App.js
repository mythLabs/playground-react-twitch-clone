import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';


const PageOne=() => {
    return <div>p1</div>
}

const PageTwo=() => {
    return <div>p2</div>
}

const App = () => {
    return <div>
          <BrowserRouter>
            <div>
            <Route path="/" exact component={PageOne} />
            <Route path="/pagetwo" component={PageTwo} />
            </div>
          </BrowserRouter>
        </div>
}

export default App;