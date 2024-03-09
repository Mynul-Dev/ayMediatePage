import React, { useState } from "react";
import ReactPlayer from "react-player";
import Img from "../../../assets/Thumb.png";
import Vid from "../../../assets/MeditationADSquare.mp4";
import "./Style.css";
import { Container } from "react-bootstrap";

export default function Video() {

  return (
      <div >
    
        <ReactPlayer
          width={'fit-content'}
          style={{  width: "fit-content" }}
          url={Vid}
          playing={true}
          controls={true}
          loop={true}
          muted={true}
          playsinline={true}
          className='ReactPlayer'
          playsInline // Disable download button
          config={{
              file: {
                  attributes: { controlsList: "nodownload" },
              },
          }}
          light={<img src={Img} alt="" width={"fit-content"} height={"100%"}/>} // Set the thumbnail image using the light prop
        />
      </div>
  );
}
