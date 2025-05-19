import { View } from 'react-native';

import ReviewItem from './review-item';

const anne = require('@/assets/images/image-anne.jpg');
const colton = require('@/assets/images/image-colton.jpg');
const irene = require('@/assets/images/image-irene.jpg');

const ReviewList = () => {
  return (
    <>
      <View className="flex flex-col gap-2 lg:flex-row lg:gap-4">
        <ReviewItem
          testID="review-colton"
          className="lg:mt-0"
          src={colton}
          name="Colton Smith"
          text={`"We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.
    Excellent!"`}
        />
        <ReviewItem
          testID="review-irene"
          className="lg:mt-6"
          src={irene}
          name="Irene Roberts"
          text={`"Customer service is always excellent and very quick turn around. Completely
    delighted with the simplicity of the purchase and the speed of delivery."`}
        />
        <ReviewItem
          testID="review-anne"
          className="lg:mt-12"
          src={anne}
          name="Anne Wallace"
          text={`"Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!"`}
        />
      </View>
    </>
  );
};

export default ReviewList;
