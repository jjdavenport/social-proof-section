import '@/global.css';
import { ScrollView, View } from 'react-native';
import { useMediaQuery } from 'react-responsive';
import Content from './components/content';
import Footer from './components/footer';
import ReviewList from './components/review-list';
import StarsList from './components/stars-list';

export default function HomeScreen() {
  const desktop = useMediaQuery({ minWidth: 1024 });

  if (desktop) {
    return (
      <View className="font-league flex h-full min-h-screen items-center text-default">
        <View className="flex max-w-screen-xl flex-1 flex-col items-center justify-center gap-16 px-10">
          <View className="flex w-full flex-row justify-between">
            <Content />
            <StarsList />
          </View>
          <ReviewList />
        </View>
        <Footer />
      </View>
    );
  }

  return (
    <ScrollView className="font-league flex h-full min-h-screen text-default">
      <View className="flex flex-1 items-center gap-8 px-6 py-10">
        <Content />
        <StarsList />
        <ReviewList />
      </View>
      <Footer />
    </ScrollView>
  );
}
