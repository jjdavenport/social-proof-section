import { Image, Text, View } from 'react-native';

const stars = require('@/assets/images/icon-star.svg');

type Props = {
  text: string;
  className: string;
};

const StarsItem = ({ text, className }: Props) => {
  return (
    <>
      <View
        className={`${className} bg-lightGrayishMagenta flex items-center gap-2 rounded-lg px-4 py-4 lg:w-96 lg:flex-row lg:px-10 lg:py-5`}>
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
