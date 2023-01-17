import { FC } from 'react';
import Comment from '../../types/comment';

type Props = {
  comment: Comment;
}

const Review: FC<Props> = ({ comment }) => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{comment.comment}</p>
      <footer className="review__details">
        <cite className="review__author">{comment.user.name}</cite>
        <time className="review__date" dateTime="2016-12-24">{new Date(comment.date).toLocaleDateString('en-us', { year:'numeric', month:'long', day:'numeric'})}</time>
      </footer>
    </blockquote>
    <div className="review__rating">{comment.rating}</div>
  </div>
);

export default Review;
