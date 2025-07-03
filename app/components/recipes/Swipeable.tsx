import { Slot } from "expo-router";
import { Dimensions, StyleSheet, View, ViewStyle } from "react-native";
import Animated, { 
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate
} from "react-native-reanimated";
import Interactable from "./Interactable";

const { width, height } = Dimensions.get("window");
const CARD_WIDTH = width - 32;
const CARD_HEIGHT = height
const PHI = (1 + Math.sqrt(5)) / 2;
const DELTA_X = width / 2;

const ALPHA = Math.PI / 12;
const SWIPE_THRESHOLD = width * Math.cos(ALPHA) + height * Math.sin(ALPHA);

interface SwipeableRecipeProps {
  children: JSX.Element;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export default function SwipeableRecipe({ children, onSwipeLeft, onSwipeRight }: SwipeableRecipeProps) {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const onSnap = (snapX: number) => {
//    console.log(snapX); 
  };

  const onInteractableSwipeLeft = () => {
    onSwipeLeft();
  };

  /**
   * This function is called when the user swipes right.
   * It is only called if the user swipes more than the threshold distance.
   * @function
   */

  const onInteractableSwipeRight = () => {
    onSwipeRight();
  }

  const animatedStyle = useAnimatedStyle(() => {
    const rotateZ = interpolate(
      x.value,
      [-DELTA_X, DELTA_X],
      [ALPHA, -ALPHA],
      Extrapolate.CLAMP
    ).toFixed(2)+"rad";

    return {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      transform: [
        { translateX: x.value },
        { translateY: y.value },
        { rotateZ },
      ] as ViewStyle['transform'],
    } as ViewStyle;
  }) as ViewStyle;

  return (
    <View style={{
      flex:1
    }}>
      <Animated.View style={animatedStyle}>
        {children}
      </Animated.View>
      <Interactable
        snapOffset={SWIPE_THRESHOLD}
        x={x}
        y={y}
        onSwipeLeft={onInteractableSwipeLeft}
        onSwipeRight={onInteractableSwipeRight}
        style={StyleSheet.absoluteFill}
        onSnap={onSnap}
      />
    </View>
  );
}