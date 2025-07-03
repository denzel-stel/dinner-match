import { useCallback } from 'react';
import { Animated, ViewStyle } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useSharedValue, useAnimatedStyle, withSpring, runOnJS, SharedValue } from 'react-native-reanimated';

interface SnapPoint {
  x: number;
}

interface InteractableProps {
  snapOffset: number;
  onSnap: (x: number) => void;
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
  style: ViewStyle;
  x: SharedValue<number>;
  y: SharedValue<number>;
}

export default function Interactable({ 
  style, 
  x, 
  y, 
  snapOffset, 
  onSnap, 
  onSwipeLeft, 
  onSwipeRight 
}: InteractableProps) {

  const translateX = x;
  const translateY = y;
  const context = useSharedValue({ x: 0, y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {
        x: translateX.value,
        y: translateY.value,
      };
    })
    .onUpdate((event) => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    })
    .onEnd((event) => {           
      let nearestPoint = 0;
          // At least 20% of the way to the next point
      const treshold = 0.3;

      const swipedOverTresholdDistance = Math.abs(event.translationX) > (snapOffset * treshold);
      const swipedFastEnough = Math.abs(event.velocityX) > 2000;

      if (swipedFastEnough || swipedOverTresholdDistance) {
        // Snap to the nearest point in the correct direction
        nearestPoint = event.translationX > 0 ? snapOffset : -snapOffset;
        translateX.value = nearestPoint;
        translateY.value = 0;
        if (nearestPoint > 0) {
          runOnJS(onSwipeRight)();
        } else {
          runOnJS(onSwipeLeft)();
        }
      }

      // Snap back
      else {
        // Apply spring animation to snap point
        translateX.value = withSpring(0, {
          velocity: event.velocityX,
          damping: 300,
          stiffness: 50,
        });
        
        translateY.value = withSpring(0);
      }
 
      runOnJS(onSnap)(nearestPoint);
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[style, animatedStyle]} />
    </GestureDetector>
  );
}