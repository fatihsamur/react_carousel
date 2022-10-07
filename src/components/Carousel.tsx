/* eslint-disable */
import React from 'react';
import './Carousel.scss';

type Props = {
  images: string[],
  step: number,
  frameSize: number,
  itemWidth: number,
  animationDuration: number,
  infinite: boolean,
};

type State = {
  images: string[],
  translation: number,
};

class Carousel extends React.Component<Props, State> {
  state = {
    images: this.props.images,
    translation: 0,
  };

  scrollNext = () => {
    console.log('scrolled next');
    this.setState(prevState => ({
      translation: prevState.translation - 130,
    }))
  };

  scrollPrev = () => {
    console.log('scrolled prev');
    this.setState(prevState => ({
      translation: prevState.translation + 130,
    }))
  };

  render() {
    const inlineStyle = {
      transform: `translateX(${this.state.translation}px)`,
    };
    return (
      <div className="Carousel">
        <ul className="Carousel__list">
          {this.state.images.map((image, i) => (
            <li className="Carousel__list-item" key={image}>
              <img
                style={inlineStyle}
                className="Carousel__img"
                src={image}
                alt={`${i}`}
              />
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={this.scrollPrev}
        >
          Prev
        </button>
        <button
          data-cy="Next"
          type="button"
          onClick={this.scrollNext}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Carousel;
