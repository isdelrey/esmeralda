import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Main from './pages/Main';
import Store from './Store.js';
import './assets/css/App.css';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Provider store={new Store()}>
        <HashRouter settings={this.settings}>
          <Switch>
            <Route exact path="/" component={Main}/>
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
