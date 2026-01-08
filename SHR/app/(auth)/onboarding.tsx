import React, { useRef, useState } from 'react';
import {
  View,
  Image,
  FlatList,
  Dimensions,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { router } from 'expo-router';
import { Text } from '../../_components/ui/text';
import { Button } from '../../_components/ui/button';
import { Tag } from '../../_components/ui/tag';
import { useTheme } from '../../_theme/useTheme';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'Laipni lūdzam!',
    subtitle: 'Izpēti mūsu lietotni soli pa solim.',
    image: require('../../assets/onb-1.png'),
  },
  {
    key: '2',
    title: 'Ātra piekļuve',
    subtitle: 'Piekļūsti funkcijām ar vienu pieskārienu.',
    image: require('../../assets/onb-2.png'),
  },
  {
    key: '3',
    title: 'Sāc tagad',
    subtitle: 'Reģistrējies un sāc lietot uzreiz.',
    image: require('../../assets/onb-3.png'),
    isLast: true,
  },
];

export default function Onboarding() {
  const theme = useTheme();
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSkip = () => router.replace('/(tabs)/absence');
  const handleEnter = () => router.replace('/(tabs)/absence');

  const handlePrev = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      handleEnter();
    }
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      {/* SLIDES */}
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
          listener: onScroll,
        })}
        renderItem={({ item, index }) => {
          // PARALLAX
          const parallaxTranslate = scrollX.interpolate({
            inputRange: [(index - 1) * width, index * width, (index + 1) * width],
            outputRange: [-60, 0, 60],
            extrapolate: 'clamp',
          });

          return (
            <View
              style={{
                width,
                paddingHorizontal: 24,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* PREV BUTTON (top-left) */}
              {currentIndex > 0 && (
                <View style={{ position: 'absolute', top: 90, left: 24 }}>
                  <Button variant="outline" onPress={handlePrev}>
                    <Text variant="body">Iepriekšējais</Text>
                  </Button>
                </View>
              )}

              {/* SKIP BUTTON (top-right) */}
              {!item.isLast && (
                <View style={{ position: 'absolute', top: 90, right: 24 }}>
                  <Button variant="outline" onPress={handleSkip}>
                    <Text variant="body">Izlaist</Text>
                  </Button>
                </View>
              )}

              {/* FLEX COLUMN: IMAGE + DOTS + TEXT */}
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: -50,
                }}
              >
                {/* IMAGE WITH PARALLAX */}
                <Animated.View
                  style={{
                    transform: [{ translateX: parallaxTranslate }],
                    marginBottom: 12,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: 260,
                      height: 260,
                      resizeMode: 'contain',
                    }}
                  />
                </Animated.View>

                {/* TEXT */}
                <Text variant="h1" style={{ textAlign: 'center', marginBottom: 12 }}>
                  {item.title}
                </Text>

                <Text
                  variant="body"
                  style={{
                    textAlign: 'center',
                    color: theme.colors.textSecondary,
                    maxWidth: 300,
                  }}
                >
                  {item.subtitle}
                </Text>
              </View>
            </View>
          );
        }}
      />

      {/* DOT NAVIGATION (always visible at bottom) */}
      <View
        style={{
          position: 'absolute',
          bottom: 140,
          left: 0,
          right: 0,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
        >
          {slides.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [10, 32, 10],
              extrapolate: 'clamp',
            });

            const dotOpacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.4, 1, 0.4],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={i}
                style={{
                  width: dotWidth,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: theme.colors.primary,
                  marginHorizontal: 4,
                  opacity: dotOpacity,
                }}
              />
            );
          })}
        </View>
      </View>

      {/* NEXT BUTTON (bottom-center) */}
      {currentIndex < slides.length - 1 && (
        <View
          style={{
            position: 'absolute',
            bottom: 60,
            left: 0,
            right: 0,
            alignItems: 'center',
          }}
        >
          <Button variant="primary" onPress={handleNext}>
            <Text variant="body" style={{ color: '#FFFFFF' }}>
              Nākamais
            </Text>
          </Button>
        </View>
      )}

      {/* ENTER BUTTON (bottom-center on last slide) */}
      {currentIndex === slides.length - 1 && (
        <View
          style={{
            position: 'absolute',
            bottom: 60,
            left: 0,
            right: 0,
            alignItems: 'center',
          }}
        >
          <Button variant="primary" onPress={handleEnter}>
            <Text variant="body" style={{ color: '#FFFFFF' }}>
              Ienākt
            </Text>
          </Button>
        </View>
      )}
    </View>
  );
}
