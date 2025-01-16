import { View, StatusBar, Image, Text } from "react-native";
import React, { useEffect } from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

//Image

import WelcomeImg from "../../assets/welcome.jpg";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);
  const navigation = useNavigation();

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;

    setTimeout(() => {
      ring1padding.value = withSpring(ring1padding.value + hp(5), 100);
      ring2padding.value = withSpring(ring2padding.value + hp(5.5), 300);
    });

    setTimeout(() => navigation.navigate("Home"), 2500);
  }, []);

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar barStyle="light-content" hidden />

      <Animated.View
        className="bg-white/20 rounded-full "
        style={{ padding: ring2padding }}
      >
        <Animated.View
          className="bg-white/20 rounded-full "
          style={{ padding: ring1padding }}
        >
          <Image
            source={WelcomeImg}
            style={{ width: hp(22), height: hp(22) }}
            className="rounded-full "
          />
        </Animated.View>
      </Animated.View>

      {/*Title and punchline* */}
      <View className="flex  mt-8 items-center space-y-2 gap-4 ">
        <Text
          style={{ fontSize: hp(7) }}
          className="font-bold text-white tracking-widest text-6xl font-primary "
        >
          Foody
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className="font-medium text-white tracking-widest font-secondary"
        >
          Food is always right
        </Text>
      </View>
    </View>
  );
}
