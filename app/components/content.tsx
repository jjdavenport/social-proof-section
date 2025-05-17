import { Text, View } from 'react-native';

const Content = () => {
  return (
    <>
      <View className="flex flex-col items-center gap-4 lg:w-1/2 lg:items-start lg:gap-8">
        <Text className="text-veryDarkMagenta w-60 text-center text-4xl font-bold tracking-tight lg:w-80 lg:text-start lg:text-5xl">
          10,000+ of our users love our products.
        </Text>
        <Text className="text-darkGrayishMagenta w-72 text-center font-medium leading-5 lg:w-96 lg:text-start">
          We only provide great products combined with excellent customer service. See what our
          satisfied customers are saying about our services.
        </Text>
      </View>
    </>
  );
};

export default Content;
