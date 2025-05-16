import { Image, Text, View } from 'react-native';

type Props = {
  text: string;
  src: string;
  name: string;
};

const ReviewItem = ({ text, name, src }: Props) => {
  return (
    <>
      <View>
        <View>
          <Image source={src} />
          <View>
            <Text>{name}</Text>
            <Text>Verified Buyer</Text>
          </View>
        </View>
        <Text>{text}</Text>
      </View>
    </>
  );
};

export default ReviewItem;
