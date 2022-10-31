import { ChangeEvent, FC, useState } from 'react';
import RatingStar from './rating-star';

const ReviewForm: FC = () => {
  const [, setReviewValue] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleValueChange = (newValue: number) => {
    setReviewValue(newValue);
  };

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(event.target.value);
  };


  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {[...Array(10) as number[]].map((_, i) => <RatingStar value={10 - i} onChange={handleValueChange} key={`star-${10 - i}`} />)}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={reviewText} onChange={handleTextChange} />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>);
};

export default ReviewForm;
