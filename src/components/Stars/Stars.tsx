import React, { FC, useState } from 'react';
import { View } from 'react-native';
import StarRating from 'react-native-star-rating';
import useStyles from './Stars.styles';
import { fullStar, emptyStar } from '@assets/images/index';

interface StarProps {
  starSize: number;
  starWidth: number;
}

const Stars: FC<StarProps> = ({ starSize, starWidth }) => {
  const styles = useStyles(starWidth)();
  const [starCount, setStarCount] = useState(4);

  const onStarRatingPress = (rating: number) => {
    setStarCount(rating);
  };

  return (
    <View style={styles.starContainer}>
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
        starSize={starSize}
        starStyle={styles.starStyle}
      />
    </View>
  );
};

export default Stars;
