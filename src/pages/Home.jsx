import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Movies from "../components/Movies";
import Viewers from "../components/Viewers";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, {id: doc.id , ...doc.data()}]
            break;
          case "new":
            newDisney = [...newDisney, {id: doc.id , ...doc.data()}]
            break;
          case "original":
            originals = [...originals, {id: doc.id , ...doc.data()}]
            break;
          case "trending":
            trending = [...trending, {id: doc.id , ...doc.data()}]
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );


    });

   
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: 92vh;
  padding: 0px calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
