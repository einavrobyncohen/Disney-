import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Logo src="images/logo.svg" />
      <NavMenu>
          <a href="">
            <img  src="images/home-icon.svg" />
            <span>HOME</span>
          </a>
          <a href="">
            <img  src="images/search-icon.svg" />
            <span>SEARCH</span>
          </a>
          <a href="">
            <img  src="images/watchlist-icon.svg" />
            <span>WATCHLIST</span>
          </a>
          <a href="">
            <img  src="images/original-icon.svg" />
            <span>ORIGINALS</span>
          </a>
          <a href="">
            <img  src="images/movie-icon.svg" />
            <span>MOVIES</span>
          </a>
          <a href="">
            <img  src="images/series-icon.svg" />
            <span>SERIES</span>
          </a>
      </NavMenu>
      <UserImg src="https://avatars.githubusercontent.com/u/91840306?v=4"/>
    </Nav>
);
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background:#090b13;
  display:flex;
  align-items: center;
  padding: 0px 36px;
  overflow-x: hidden;
  
`

const Logo = styled.img`
  width: 80px;

`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-inline-start: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
      object-fit: cover;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.52px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        right:0;
        left: 0;
        bottom: -6px;
        opacity:0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor-pointer;
  object-fit: cover;


`
