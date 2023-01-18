import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import RatingStar from './rating-star';

type Props = {
  filmId: string;
}

const ReviewForm: FC<Props> = ({ filmId }) => {
  const [reviewValue, setReviewValue] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [formDisabled, setFormDisabled] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  const handleValueChange = (newValue: number) => {
    setReviewValue(newValue);
  };

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const postComment = async () => {
      setFormDisabled(true);
      await api.post(`/comments/${filmId}`, {comment: reviewText, rating: reviewValue});
    };

    postComment()
      .then(() => {
        navigate(`/films/${filmId}`);
      })
      .catch((err: Error) => {
        setError(err);
      })
      .finally(() => {
        setFormDisabled(false);
      });
  };

  const isSubmitDisabled = reviewText.length < 50 || reviewText.length > 400 || formDisabled || reviewValue < 1;

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {[...Array(10) as number[]].map((_, i) => <RatingStar value={10 - i} onChange={handleValueChange} key={`star-${10 - i}`} />)}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={reviewText} onChange={handleTextChange} />
          <div className="add-review__submit">
            <button className="add-review__btn" disabled={isSubmitDisabled} type="submit">Post</button>
          </div>
        </div>
      </form>
      {error && <p>{'Review was cancelled due to an error'}</p>}
    </div>);
};

export default ReviewForm;
