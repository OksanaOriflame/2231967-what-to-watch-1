import { FC } from 'react';
import Comment from '../../types/comment';
import Review from '../review/review';

type Props = {
  comments: Comment[];
}

const Reviews: FC<Props> = ({ comments }) => (
  <div className="film-card__reviews film-card__row">
    <div className="film-card__reviews-col">
      {comments.slice(0, Math.ceil(comments.length / 2)).map((comment) => <Review comment={comment} key={comment.id}/>)}
    </div>
    <div className="film-card__reviews-col">
      {comments.slice(Math.ceil(comments.length / 2)).map((comment) => <Review comment={comment} key={comment.id}/>)}
    </div>
  </div>
);

export default Reviews;
