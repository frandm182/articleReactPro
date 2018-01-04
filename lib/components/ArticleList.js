import React from 'react';
import Article from './Article';

const ArticleList = (props) => (
  <div>
    {Object.values(props.articles).map((article) => 
      <Article
        key={article.id}
        article={article} 
        author={props.authors[article.authorId]}/>
    )}
  </div>);
export default ArticleList;