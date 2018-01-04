import React from 'react';
import { debounce } from 'lodash';

class SearchBar extends React.Component {
    state = {
      searchTerm: ''
    };

    doSearch = debounce(() => {
      this.props.doSearch(this.state.searchTerm);
    }, 300);
    handleSearch = (e) => {
      this.setState({ searchTerm: e.target.value }, () => {
        this.doSearch();
      });
    }
    render() {
      return (
        <input
          ref={(input) => this.searchInput = input }
          type="search"
          placeholder="Enter search terms"
          value={this.state.searchTerm}
          onChange={this.handleSearch}
        />
      );
    }
}

export default SearchBar;