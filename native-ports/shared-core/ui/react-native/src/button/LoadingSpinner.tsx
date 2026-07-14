import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";
import { ThemeColours } from "../theme-constants";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface LoadingSpinnerProps {
    /** Overall diameter of the spinner (default 24) */
    size?: number;
    /** Colour of the ring arcs (default: brand-50) */
    colour?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
const RING_COUNT = 4;

export function LoadingSpinner({
    size = 24,
    colour = ThemeColours.loadingSpinnerColour,
}: LoadingSpinnerProps) {
    const spinValues = useRef(
        Array.from({ length: RING_COUNT }, () => new Animated.Value(0))
    ).current;

    useEffect(() => {
        const animations = spinValues.map((val, idx) =>
            Animated.loop(
                Animated.timing(val, {
                    toValue: 1,
                    duration: 1200,
                    delay: idx * 150, // stagger each ring
                    easing: Easing.linear,
                    useNativeDriver: true,
                })
            )
        );
        animations.forEach((a) => a.start());
        return () => {
            animations.forEach((a) => a.stop());
        };
    }, [spinValues]);

    const ringSize = size;
    const borderWidth = Math.max(2, size / 10);

    return (
        <View
            style={[styles.container, { width: size, height: size }]}
            accessibilityRole="progressbar"
            accessibilityLabel="Loading"
        >
            {spinValues.map((val, idx) => {
                const rotate = val.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "360deg"],
                });
                // Each ring is slightly smaller than the previous one
                const ringDiameter = ringSize - idx * (borderWidth * 0.8);
                return (
                    <Animated.View
                        key={idx}
                        style={[
                            styles.ring,
                            {
                                width: ringDiameter,
                                height: ringDiameter,
                                borderWidth,
                                borderRadius: ringDiameter / 2,
                                borderTopColor: colour,
                                transform: [{ rotate }],
                            },
                        ]}
                    />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    ring: {
        position: "absolute",
        borderColor: "transparent",
    },
});
