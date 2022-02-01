import React from 'react';
import styled from 'styled-components'
import ImgSlider from '../components/ImgSlider';
import Movies from '../components/Movies';
import NewDisney from '../components/NewDisney';
import Originals from '../components/Originals';
import Trending from '../components/Trending';
import Viewers from '../components/Viewers';
import {useDispatch, useSelector} from 'react-redux'
import db from '../firebase'
import {setMovies} from '../features/movie/movieSlice'
import {selectUserName} from '../features/user/userSlice'


function Home() {
  return(
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
    )
}

export default Home;

const Container = styled.main`

  min-height: 92vh;
  padding: 0px calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: -1;
  }

`
