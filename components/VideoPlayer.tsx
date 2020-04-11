import * as React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.scss";

type VideoPlayerProps = {
  url: string;
};

type VideoPlayerState = {
  playing: boolean;
  volume: number;
};

class VideoPlayer extends React.Component<VideoPlayerProps, VideoPlayerState> {
  player: any;
  constructor(props: VideoPlayerProps) {
    super(props);
    this.state = {
      playing: false,
      volume: 0.8,
    };
  }

  ref = (player: any) => {
    this.player = player;
  };
  render() {
    return (
      <div className='VideoPlayer'>
        <div className='VideoPlayer__video'>
          <ReactPlayer
            className='player'
            ref={this.ref}
            url={this.props.url}
            height='100%'
            width='100%'
            volume={this.state.volume}
            playing={this.state.playing}
          />
        </div>
        <div className='VideoPlayer__options'>
          <div className='VideoPlayer__options-main'>
            <p onClick={() => this.setState({ playing: true })}>|></p>
            <p onClick={() => this.setState({ playing: false })}>||</p>
            <p
              onClick={() => {
                this.player.seekTo(parseFloat("0"));
                this.setState({ playing: false });
              }}
            >
              []
            </p>
          </div>
          <div className='VideoPlayer__options-volume'>
            <p
              onClick={() => this.setState({ volume: this.state.volume - 0.1 })}
            >
              {"<= -"}
            </p>
            <p
              onClick={() => this.setState({ volume: this.state.volume + 0.1 })}
            >
              {"<= +"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
