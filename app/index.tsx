import '@/global.css';
import { ScrollView, View } from 'react-native';
import Content from './components/content';
import Footer from './components/footer';
import ReviewList from './components/review-list';
import StarsList from './components/stars-list';

export default function HomeScreen() {
  return (
    <>
      <ScrollView className="font-league flex h-full min-h-screen text-default">
        <View className="flex flex-1 items-center gap-8 px-6 py-10">
          <Content />
          <StarsList />
          <ReviewList />
        </View>
        <Footer />
      </ScrollView>
    </>
  );
}
