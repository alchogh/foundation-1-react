import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <div className="wrap">
      <section className="nav">
        <div className="navInputWrap">
          <div className="navInputLetter">
            <div className="imgInstaLogo"></div>
            <p class="instaTitle">instagram</p>
          </div>
          <input className="search" type="text" placeholder="검색" />
          <div className="navInputImgs">
            <div className="imgNavigation"></div>
            <div className="imgHeart"></div>
            <div className="imgInfo"></div>
          </div>
        </div>
      </section>

      <section className="main">
        <section className="feeds">
          <div className="feedsHeader">
            <div className="feedsBoth">
              <div className="feedsProfile"></div>
              <p className="name">gnoooo_</p>
            </div>

            <div className="feedsDot"></div>
          </div>

          <div className="imgArticle"></div>

          <div className="feedsComments">
            <div className="imgs">
              <div className="imgHeart"></div>
              <div className="imgComment"></div>
              <div classNAme="imgShare"></div>
            </div>

            <div className="imgFlag"></div>
          </div>
          <div className="asideLike">
            <p>
              <span>all_dlwltn</span>님 외 10명이 좋아합니다
            </p>
          </div>
          <div class="feedsCommit">
            <p>
              <a href="#" class="name">
                all_dlwltn
              </a>{" "}
              어쩌구저쩌구
              <span>더보기</span>
            </p>
            <ul id="comment-wrapper" className="commentWrapper">
              <li>
                wlfjskldfj <span>삭제</span>
              </li>
            </ul>
          </div>

          <form id="comment-box" className="leftComment">
            <input
              id="left-comment"
              class="inputComment"
              type="text"
              placeholder="댓글 달기..."
            />
            <button id="comment-submit" className="inputBtn">
              게시
            </button>
          </form>
        </section>

        <section className="mainRight">
          <div className="rightFirst">
            <div className="rightHeader"></div>
            <div className="letter">
              <p className="boot">
                wecode_bootcamp <br />
                Wecode | 위코드
              </p>
            </div>
          </div>

          <div className="rightStory">
            <div className="storyAll">
              <p className="story">스토리</p>
              <p className="seeAll">모두 보기</p>
            </div>
            <div className="rightProfile">
              <div className="imgProfiles"></div>
              <div className="profileNickName">
                <p className="nickname">||botndk</p>
                <p className="minute">16 분전</p>
              </div>
            </div>
          </div>
          <div className="rightRecommend">
            <div className="recommendAll">
              <p className="story">회원님을 위한 추천</p>
              <p className="seeAll">모두 보기</p>
            </div>

            <div className="recommendProfiles">
              <div className="imgRecommend"></div>
              <div className="recommendNickname">
                <p className="nickRecommend">i_cant_know</p>
                <p className="knowRecommend">중꺽마님 외 3외님이...</p>
              </div>
              <p className="follow">팔로우</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Main;
