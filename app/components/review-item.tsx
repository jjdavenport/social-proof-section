import { Image } from 'expo-image';
import { Text, View } from 'react-native';

type Props = {
  text: string;
  src: string;
  name: string;
  className: string;
};

const ReviewItem = ({ text, name, src, className }: Props) => {
  return (
    <>
      <View
        className={`${className} bg-veryDarkMagenta flex flex-col gap-4 rounded-md p-6 lg:h-fit lg:w-80 lg:p-8`}>
        <View className="flex flex-row gap-4">
          <Image className="size-8 rounded-full object-contain" source={src} />
          <View>
            <Text className="text-white">{name}</Text>
            <Text className="text-softPink">Verified Buyer</Text>
          </View>
        </View>
        <Text className="whitespace-normal text-white">{text}</Text>
      </View>
    </>
  );
};

export default ReviewItem;
