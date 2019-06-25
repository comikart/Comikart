import React, { Component } from 'react';
import { ComicBooks } from './ComicBooks';
import './Carousel.scss';

export default class Carousel extends Component {
  constructor(props){
    super(props);

    this.state = {
      comicBookIndex: 0
    };
  }

  render() {
    const { comicBookIndex } = this.state;

    return (
      <div className='carousel-container'>
        <div className='comic-book-container'>
          <img height='50%' width='50%' src={ComicBooks[comicBookIndex].imageSource} alt={ComicBooks[comicBookIndex].title + ' ' + ComicBooks[comicBookIndex].author} />
          <div className='comic-book-information'>
            <div className='comic-book-title'>{ComicBooks[comicBookIndex].title}</div>
            <div className='comic-book-author'>{ComicBooks[comicBookIndex].author}</div>
          </div>
        </div>
      </div>
    );
  };
}
