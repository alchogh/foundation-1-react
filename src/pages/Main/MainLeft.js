import React, { useState } from "react";
import CommentBoard from "./CommentBoard";

const MainLeft = () => {
  const [inputValue, setInputvalue] = useState("");
  const [commentList, setCommentList] = useState([]);
  const addComment = (e) => {
    setCommentList([...commentList, inputValue]);
    e.preventDefault();
  };
  return (
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
          <div className="imgShare"></div>
        </div>

        <div className="imgFlag"></div>
      </div>
      <div className="asideLike">
        <p>
          <span>all_dlwltn</span>님 외 10명이 좋아합니다
        </p>
      </div>
      <div className="feedsCommit">
        <p>
          <a href="#" className="name">
            all_dlwltn
          </a>{" "}
          어쩌구저쩌구
          <span>더보기</span>
        </p>
        <ul id="comment-wrapper" className="commentWrapper">
          <CommentBoard commentList={commentList} />
        </ul>
      </div>

      <form id="comment-box" className="leftComment">
        <input
          id="left-comment"
          className="inputComment"
          type="text"
          placeholder="댓글 달기..."
          onChange={(e) => setInputvalue(e.target.value)}
          value={inputValue}
        />
        <button id="comment-submit" className="inputBtn" onClick={addComment}>
          게시
        </button>
      </form>
    </section>
  );
};

export default MainLeft;
