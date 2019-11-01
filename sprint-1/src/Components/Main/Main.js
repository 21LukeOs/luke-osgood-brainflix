import React from 'react';
import Header from '../Header/Header.js';
import Hero from '../Hero/Hero';
import Article from '../Article/Article.js';
import CommenInput from '../CommentInput/CommentInput.js';


class Main extends React.Component {
    render() { 
      return (
        <>
        <Header />
        <Hero />
        <Article />
        <CommenInput />
        </>
      );
    }
}

export default Main;