import React, { Component } from 'react';

class App extends Component {

  componentDidMount(){
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
    || navigator.mozGetUserMedia; 
    if(navigator.getUserMedia){
      navigator.getUserMedia({video: true, audio: true}, (stream) => {
        console.log(stream)
        var video = document.getElementById('video-player'); 
        video.srcObject = stream;
        video.play();
        video.muted = true;
      }, (error) => {
        console.log(error);
      })
    }
    else{
      console.log("Browser does not support WebRTC")
    }
  }

  render() {
    const style = {
      player : {
        "transform": "rotateY(180deg)",
        "WebkitTransform": "rotateY(180deg)",
        "MozTransform": "rotateY(180deg)",
        "width" : "600px"
      }
    }

    return (
      <div>
       <video id="video-player" style={style.player}>
       </video>
      </div>
    );
  }
}

export default App;