import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://image.tmdb.org/t/p/original/1yuQdOTZ6jgsXksXcllqxW734HS.jpg" />
      </Background>
      <ImgTitle>
        <img src="images/photoroom.png" />
      </ImgTitle>
      <Controls>
        <PlayBtn>
          <img src="images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayBtn>
        <TrailerBtn>
          <img src="images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerBtn>
        <AddBtn>
          <span>+</span>
        </AddBtn>
        <GroupBtn>
          <img src="images/group-icon.png" />
        </GroupBtn>
      </Controls>
      <Subtitle>
        2018 · 7m · Family, Fantasy, Kids, Animation
      </Subtitle>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora iste nesciunt molestias minima qui sed voluptatem labore velit cupiditate natus quae aspernatur eveniet culpa necessitatibus, error quas provident, est laudantium.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImgTitle = styled.div`
// align-items: flex-end;
display: flex;
justify-content: flex-start;
margin: 0px auto;
height: 30vw;
min-height: 170px;
padding-bottom: 24px;
width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayBtn = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  margin-inline-end: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
`;

const TrailerBtn = styled(PlayBtn)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddBtn = styled.button`
  margin-inline-end: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupBtn = styled(AddBtn)`
  background: black;
`;


const Subtitle = styled.div`
  color: rgb(249,249,249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249,249,249);
  max-width: 760px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`
