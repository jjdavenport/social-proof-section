import { View } from 'react-native';
import StarsItem from './stars-item';

const StarsList = () => {
  return (
    <>
      <View className="flex w-full gap-4 lg:w-1/2 lg:items-end lg:justify-center">
        <StarsItem className="lg:mr-32" text="Rated 5 Stars in Reviews" />
        <StarsItem className="lg:mr-20" text="Rated 5 Stars in Report Guru" />
        <StarsItem className="lg:mr-0" text="Rated 5 Stars in BestTech" />
      </View>
    </>
  );
};

export default StarsList;
