import * as React from "react";
import Link from "next/link";
import classnames from "classnames";
import "./InfiniteCarousel.scss";

type InfiniteCarouselProps = {
  images: string[];
};

type InfiniteCarouselState = {
  imagesToDisplay: string[];
  nextImageToAdd: number;
  multiplier: number;
  stopScrollingOpacity: number;
  shouldCutOffScrolling: boolean;
};

const SCROLL_AMOUNT = 500;

class InfiniteCarousel extends React.Component<
  InfiniteCarouselProps,
  InfiniteCarouselState
> {
  list: React.RefObject<HTMLUListElement>;

  constructor(props: InfiniteCarouselProps) {
    super(props);
    this.list = React.createRef();
    this.state = {
      imagesToDisplay: [],
      nextImageToAdd: 0,
      multiplier: 1,
      stopScrollingOpacity: 0,
      shouldCutOffScrolling: false,
    };
  }

  componentDidMount() {
    this.setState({ imagesToDisplay: this.props.images });
  }

  handleScroll = () => {
    if (!this.list.current) return;
    const { multiplier, imagesToDisplay, nextImageToAdd }: any = this.state;
    const { current } = this.list;
    if (current.scrollLeft > SCROLL_AMOUNT * multiplier) {
      const temp = imagesToDisplay;
      temp.push(this.props.images[nextImageToAdd]);
      this.setState({
        imagesToDisplay: temp,
        nextImageToAdd: (nextImageToAdd + 1) % this.props.images.length,
        multiplier: multiplier + 1,
      });
    }
    if (current.scrollLeft === 0) {
      this.setState({
        imagesToDisplay: this.props.images,
      });
    }
    if (imagesToDisplay.length > 150) {
      this.setState({
        stopScrollingOpacity: this.state.stopScrollingOpacity + 0.01,
      });
    }
    if (imagesToDisplay.length > 250) {
      this.setState({ shouldCutOffScrolling: true });
    }
  };

  render() {
    const { imagesToDisplay, shouldCutOffScrolling }: any = this.state;
    return (
      <div className='Carousel'>
        <ul
          className='Carousel__Photo'
          ref={this.list}
          onScroll={this.handleScroll}
        >
          <div
            className={classnames("Carousel__stop-scrolling", {
              "cut-off": shouldCutOffScrolling,
            })}
            style={{ opacity: `${this.state.stopScrollingOpacity}` }}
          >
            <div className='message'>
              <p>please stop scrolling</p>
              {shouldCutOffScrolling && (
                <div className='gif'>
                  <img src='/america-crying.gif' />
                </div>
              )}
            </div>
            {shouldCutOffScrolling && (
              <p onClick={() => window.location.reload()} className='reset'>
                X
              </p>
            )}
          </div>
          {imagesToDisplay.map((image: string, i: number) => (
            <li key={`${i}_${image}`}>
              <Link href={image}>
                <a>
                  <img src={image} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default InfiniteCarousel;
