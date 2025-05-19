import { Image } from 'expo-image';
import { Text, View } from 'react-native';

type Props = {
  text: string;
  src: string;
  name: string;
  className: string;
  testID: string;
};

const ReviewItem = ({ text, name, src, className, testID }: Props) => {
  return (
    <>
      <View
        className={`${className} flex flex-col gap-4 rounded-lg bg-veryDarkMagenta p-6 lg:h-fit lg:w-80 lg:p-8`}>
        <View className="flex flex-row gap-4">
          <Image testID={testID} className="size-8 rounded-full object-contain" source={src} />
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
