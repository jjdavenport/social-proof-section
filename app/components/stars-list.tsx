import { View } from 'react-native';
import StarsItem from './stars-item';

const StarsList = () => {
  return (
    <>
      <View>
        <StarsItem text="Rated 5 Stars in Reviews" />
        <StarsItem text="Rated 5 Stars in Report Guru" />
        <StarsItem text="Rated 5 Stars in BestTech" />
      </View>
    </>
  );
};

export default StarsList;
