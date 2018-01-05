import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pickBy } from 'lodash';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  state = this.props.store.getState();
  //Update when the store state changes... subscribe...
onStoreChange = () => 
  this.setState(this.props.store.getState());

componentDidMount() {
  this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
  this.props.store.startClock();
}

componentWillUnmount() {
  this.props.store.unsubscribe(this.subscriptionId);
}

render() {
  let { articles, searchTerms } = this.state;
  if (searchTerms) {
    articles = pickBy(articles, (value) => {
      return value.title.match(searchTerms) || value.body.match(searchTerms);
    });
  }
  return(
    <div>
      <Timestamp />
      <SearchBar doSearch={this.props.store.setSearchTerms} />
      <ArticleList 
        articles={articles} 
        store={this.props.store}
      />
    </div>
  );
}
}

export default App;