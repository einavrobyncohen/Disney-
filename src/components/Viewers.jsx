import React from "react";
import styled from "styled-components";

function Viewers() {
  const viewers = [
    { imgPath: "disney", videoPath: "1564674844-disney.mp4" },
    { imgPath: "pixar", videoPath: "1564676714-pixar.mp4" },
    { imgPath: "marvel", videoPath: "1564676115-marvel.mp4" },
    { imgPath: "starwars", videoPath: "1608229455-star-wars.mp4" },
    { imgPath: "national", videoPath: "1564676296-national-geographic.mp4" },
  ];
  return (
    <Container>
      {viewers.map((view) => (
        <Wrap key={view.imgPath}>
          <img src={`/images/viewers-${view.imgPath}.png`} />
          <video
            src={`/videos/${view.videoPath}`}
            autoPlay loop muted
          />
        </Wrap>
      ))}
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;

  @media (max-width: 660px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;
