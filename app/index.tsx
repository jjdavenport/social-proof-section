import '@/global.css';
import { Image, ScrollView, View } from 'react-native';
import { useMediaQuery } from 'react-responsive';
import Content from './components/content';
import Footer from './components/footer';
import ReviewList from './components/review-list';
import StarsList from './components/stars-list';

export default function HomeScreen() {
  const desktop = useMediaQuery({ minWidth: 1024 });

  if (desktop) {
    return (
      <ScrollView className="relative">
        <View className="flex h-full min-h-screen items-center font-league text-default">
          <Image
            resizeMode="cover"
            className="absolute left-0 top-0 -z-10 w-full"
            source={require('@/assets/images/bg-pattern-top-desktop.svg')}
          />
          <Image
            resizeMode="cover"
            className="absolute bottom-0 right-0 -z-10 w-full"
            source={require('@/assets/images/bg-pattern-bottom-desktop.svg')}
          />
          <View className="flex max-w-screen-xl flex-1 flex-col items-center justify-center gap-16 px-10">
            <View className="flex w-full flex-row justify-between">
              <Content />
              <StarsList />
            </View>
            <ReviewList />
          </View>
          <Footer />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView className="relative">
      <View className="flex h-full min-h-screen font-league text-default">
        <Image
          resizeMode="cover"
          className="absolute top-0 -z-10 w-full"
          source={require('@/assets/images/bg-pattern-top-mobile.svg')}
        />
        <Image
          resizeMode="cover"
          className="absolute bottom-0 -z-10 w-full"
          source={require('@/assets/images/bg-pattern-bottom-mobile.svg')}
        />
        <View className="flex flex-1 items-center gap-8 px-6 py-10">
          <Content />
          <StarsList />
          <ReviewList />
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
}
