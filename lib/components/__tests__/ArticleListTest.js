import React from 'react';
import 'babel-polyfill';
import ArticleList from '../ArticleList';
import ArticleContainer from '../Article';

// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' }
    }
  };
  ArticleContainer.propTypes = {};
  it('renders correctly', () => {
    const wrapper = shallow(<ArticleList {...testProps} />);
    expect(wrapper.find('ArticleContainer').length).toBe(2);

    expect(wrapper).toMatchSnapshot();
  });
});