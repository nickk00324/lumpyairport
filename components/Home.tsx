import * as React from "react";
import Link from "next/link";
import Router from "next/router";
import classNames from "classnames";
import "./Home.scss";

type HomeState = {
  showPressStart: boolean;
  selectedOptionIndex: number | undefined;
};

type HomeProps = {};

const SELECTIONS = [
  "monster-lessons",
  "opera-game",
  "dancing",
  "lumps-on-location",
  "credits",
];

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      showPressStart: true,
      selectedOptionIndex: undefined,
    };
  }

  handleKeypress = (e: any) => {
    let current = this.state.selectedOptionIndex;
    if (e.key === "Enter") this.setState({ showPressStart: false });
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (current === undefined) {
        current = 0;
      } else {
        current = current - 1;
        if (current < 0) current = SELECTIONS.length - 1;
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (current === undefined) {
        current = 0;
      } else {
        current = current + 1;
        if (current === SELECTIONS.length) current = 0;
      }
    }
    this.setState({ selectedOptionIndex: current });
  };

  commitSelection = (e: any) => {
    if (e.key === "Enter" && this.state.selectedOptionIndex) {
      Router.push({
        pathname: `/${SELECTIONS[this.state.selectedOptionIndex]}`,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeypress);
    document.addEventListener("keydown", this.commitSelection);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeypress);
    document.removeEventListener("keydown", this.commitSelection);
  }

  handleClick = () => {
    this.setState({ showPressStart: false });
  };

  render() {
    const { selectedOptionIndex } = this.state;
    let selectedOption = "";
    if (selectedOptionIndex !== undefined) {
      selectedOption = SELECTIONS[selectedOptionIndex];
    }
    return (
      <div
        className='Home'
        onMouseMove={() => this.setState({ selectedOptionIndex: undefined })}
      >
        <h1 className='quick-glow'>The Revolting Lumpen! at the Airport</h1>
        {this.state.showPressStart ? (
          <div className='Home__start' onClick={this.handleClick}>
            <p>Press Start</p>
          </div>
        ) : (
          <div className='Home__nav'>
            <Link href={"/monster-lessons"}>
              <a
                className={classNames({
                  selected: selectedOption === "monster-lessons",
                })}
              >
                Sound like a Monster
              </a>
            </Link>
            <Link href={"/opera-game"}>
              <a
                className={classNames({
                  selected: selectedOption === "opera-game",
                })}
              >
                A Short Game of Opera
              </a>
            </Link>
            <Link href={"/dancing"}>
              <a
                className={classNames({
                  selected: selectedOption === "dancing",
                })}
              >
                Dance of the Lumps
              </a>
            </Link>
            <Link href={"/lumps-on-location"}>
              <a
                className={classNames({
                  selected: selectedOption === "lumps-on-location",
                })}
              >
                Lumps at the Airport
              </a>
            </Link>
            <Link href={"/credits"}>
              <a
                className={classNames({
                  selected: selectedOption === "credits",
                })}
              >
                Credits
              </a>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
