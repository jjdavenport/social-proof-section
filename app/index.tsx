import '@/global.css';
import { View } from 'react-native';
import Content from './components/content';
import Footer from './components/footer';
import ReviewList from './components/review-list';
import StarsList from './components/stars-list';

export default function HomeScreen() {
  return (
    <>
      <View className="flex h-full min-h-screen">
        <View className="flex flex-1">
          <Content />
          <ReviewList />
          <StarsList />
        </View>
        <Footer />
      </View>
    </>
  );
}
