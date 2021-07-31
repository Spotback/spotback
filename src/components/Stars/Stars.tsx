import React, { useState } from 'react';
import StarRating from 'react-native-star-rating';
import styles from './Stars.styles';
import fullStar from '../../images/fullStar.png';
import emptyStar from '../../images/emptyStar.png';

const Stars = () => {
  const [starCount, setStarCount] = useState(4);

  const onStarRatingPress = (rating: number) => {
    setStarCount(rating);
  };

  return (
    <StarRating
      disabled={false}
      emptyStar={emptyStar}
      fullStar={fullStar}
      halfStar={fullStar}
      iconSet={'Ionicons'}
      maxStars={5}
      rating={starCount}
      selectedStar={(rating: number) => onStarRatingPress(rating)}
      fullStarColor={'yellow'}
      starSize={20}
      starStyle={styles.starStyle}
    />
  );
};

export default Stars;
