import styles from '@/styles/StarRating.module.css'
import { useState } from 'react';

export default function StarRating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      <div className={styles.starRating}>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? styles.on : styles.off}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };