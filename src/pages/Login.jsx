import { auth, provider } from "../firebase";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from "../features/user/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if(!userName) { 
      auth
      .signInWithPopup(provider)
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
    }

  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };


  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/logo.svg" />
          <Signup onClick={handleAuth}>JOIN THE FAMILY</Signup>
          <Description>
          Sign up and start streaming all of your favorite movies
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 92vh;
`;

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;

min-height: 92vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;

const BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/login-background.jpg");
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin-top:0;
  align-items: center;
  text-align: center;
  margin: auto;
    transition-timing-function: ease-out;
    trasition: opacity 0.2s;
    width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 400px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const Signup = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0483ee;
    }

`


const Description = styled.p`
    color: hsla(0,0%, 95.3%, 1);
    font-size: 14px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;

`

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    width: 100%;
`