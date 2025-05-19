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
        className={`${className} flex items-center gap-2 rounded-lg bg-lightGrayishMagenta px-4 py-4 lg:w-96 lg:flex-row lg:px-10 lg:py-5`}>
        <View className="flex flex-row gap-1">
          <Image testID="star-img" source={stars} />
          <Image testID="star-img" source={stars} />
          <Image testID="star-img" source={stars} />
          <Image testID="star-img" source={stars} />
          <Image testID="star-img" source={stars} />
        </View>
        <Text className="font-bold text-veryDarkMagenta lg:whitespace-nowrap">{text}</Text>
      </View>
    </>
  );
};

export default StarsItem;
