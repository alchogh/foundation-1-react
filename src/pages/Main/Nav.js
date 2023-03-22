import React from "react";

const Nav = () => {
  return (
    <section className="nav">
      <div className="navInputWrap">
        <div className="navInputLetter">
          <div className="imgInstaLogo"></div>
          <p className="instaTitle">instagram</p>
        </div>
        <input className="search" type="text" placeholder="검색" />
        <div className="navInputImgs">
          <div className="imgNavigation"></div>
          <div className="imgHeart"></div>
          <div className="imgInfo"></div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
