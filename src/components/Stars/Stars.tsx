import React, { FC, useState } from 'react';
import StarRating from 'react-native-star-rating';
import useStyles from './Stars.styles';
import { fullStar, emptyStar } from '@assets/images/index';

const Stars: FC = () => {
  const styles = useStyles();
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
