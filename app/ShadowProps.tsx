import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Slider, { SliderProps } from '@react-native-community/slider';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

type ShadowPropSliderProps = SliderProps & {
    label: string;
};

const ShadowPropSlider = ({ label, value, ...props }: ShadowPropSliderProps) => {
    return (
        <>
            <Text>
                {label} ({value?.toFixed(2)})
            </Text>
            <Slider step={1} value={value} {...props} />
        </>
    );
};
export default function ShadowProps() {
    const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
    const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
    const [shadowRadius, setShadowRadius] = useState(0);
    const [shadowOpacity, setShadowOpacity] = useState(0.1);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View
                    style={[
                        styles.square,
                        {
                            shadowOffset: {
                                width: shadowOffsetWidth,
                                height: -shadowOffsetHeight,
                            },
                            shadowOpacity,
                            shadowRadius,
                        },
                    ]}
                />
                <View style={styles.controls}>
                    <ShadowPropSlider
                        label="shadowOffset - X"
                        minimumValue={-50}
                        maximumValue={50}
                        value={shadowOffsetWidth}
                        onValueChange={setShadowOffsetWidth}
                    />
                    <ShadowPropSlider
                        label="shadowOffset - Y"
                        minimumValue={-50}
                        maximumValue={50}
                        value={shadowOffsetHeight}
                        onValueChange={setShadowOffsetHeight}
                    />
                    <ShadowPropSlider
                        label="shadowRadius"
                        minimumValue={0}
                        maximumValue={100}
                        value={shadowRadius}
                        onValueChange={setShadowRadius}
                    />
                    <ShadowPropSlider
                        label="shadowOpacity"
                        minimumValue={0}
                        maximumValue={1}
                        step={0.05}
                        value={shadowOpacity}
                        onValueChange={val => setShadowOpacity(val)}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    square: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 4,
        height: 150,
        shadowColor: 'black',
        width: 150,
    },
    controls: {
        paddingHorizontal: 12,
    },
});

