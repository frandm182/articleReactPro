import React from 'react';
import 'babel-polyfill';
import ArticleList from '../ArticleList';
import Article from '../Article';

// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' }
    }
  };
  Article.propTypes = {};
  it('renders correctly', () => {
    const wrapper = shallow(<ArticleList {...testProps} />);
    expect(wrapper.find('Article').length).toBe(2);

    expect(wrapper).toMatchSnapshot();
    // console.log(wrapper.find('Article'));
  });
});