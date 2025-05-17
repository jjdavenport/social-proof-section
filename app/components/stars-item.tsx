import { Image, Text, View } from 'react-native';

const stars = require('@/assets/images/icon-star.svg');

type Prop = {
  text: string;
};

const StarsItem = ({ text }: Prop) => {
  return (
    <>
      <View className="bg-lightGrayishMagenta flex items-center gap-2 rounded-lg p-4">
        <View className="flex flex-row gap-1">
          <Image source={stars} />
          <Image source={stars} />
          <Image source={stars} />
          <Image source={stars} />
          <Image source={stars} />
        </View>
        <Text className="text-veryDarkMagenta font-bold">{text}</Text>
      </View>
    </>
  );
};

export default StarsItem;
