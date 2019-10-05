import React from 'react';
import {
  Container,
  PostHeaderDiv,
  SpanBold,
  P,
  PostBodyDiv,
  PostComment,
} from './style';

function PostHeader({ author, date }) {
  return (
    <PostHeaderDiv>
      <img className="avatar" src={author.avatar} />
      <div className="profile">
        <SpanBold className="author">{author.name}</SpanBold>
        <span className="date">{date}</span>
      </div>
    </PostHeaderDiv>
  );
}

function PostBody({ comments }) {
  return (
    <PostBodyDiv className="body">
      <hr />
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <PostComment>
            <p>
              <span>{comment.author.name} </span>
              {comment.content}
            </p>
          </PostComment>
        </div>
      ))}
    </PostBodyDiv>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <Container>
      <PostHeader author={author} date={date} />
      <P className="post-content">{content}</P>
      <PostBody comments={comments} />
    </Container>
  );
}

export default PostItem;
