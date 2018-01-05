import React from 'react';
import ArticleContainer from './Article';

const ArticleList = (props) => (
  <div>
    {Object.values(props.articles).map((article) => 
      <ArticleContainer
        key={article.id}
        article={article}/>
    )}
  </div>);
export default ArticleList;