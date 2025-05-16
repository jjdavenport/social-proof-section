import { Image, Text, View } from 'react-native';

const stars = require('@/assets/images/icon-star.svg');

type Prop = {
  text: string;
};

const StarsItem = ({ text }: Prop) => {
  return (
    <>
      <View>
        <View className="flex flex-row gap-1">
          <Image source={stars} />
          <Image source={stars} />
          <Image source={stars} />
          <Image source={stars} />
          <Image source={stars} />
        </View>
        <Text>{text}</Text>
      </View>
    </>
  );
};

export default StarsItem;
