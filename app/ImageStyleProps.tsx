import React from 'react'
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const asset = require('../assets/images/react-logo.png');

export default function ImageStyleProps() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={style.container} edges={['top']}>
                <ScrollView style={style.scrollView}>
                    <View>
                        <Image style={[style.image, { resizeMode: 'cover' }]} source={asset} />
                        <Text style={style.text}>resizeMode : cover</Text>
                    </View>
                    <View>
                        <Image
                            style={[style.image, { resizeMode: 'contain' }]}
                            source={asset}
                        />
                        <Text style={style.text}>resizeMode : contain</Text>
                    </View>
                    <View>
                        <Image
                            style={[style.image, { resizeMode: 'stretch' }]}
                            source={asset}
                        />
                        <Text style={style.text}>resizeMode : stretch</Text>
                    </View>
                    <View>
                        <Image
                            style={[style.image, { resizeMode: 'repeat' }]}
                            source={asset}
                        />
                        <Text style={style.text}>resizeMode : repeat</Text>
                    </View>
                    <View>
                        <Image
                            style={[style.image, { resizeMode: 'center' }]}
                            source={asset}
                        />
                        <Text style={style.text}>resizeMode : center</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    scrollView: {
        padding: 12,
        gap: 16,
    },
    image: {
        borderWidth: 1,
        borderColor: 'red',
        height: 100,
        width: 200,
    },
    text: {
        textAlign: 'center',
        marginBottom: 12,
        color: 'white'
    },
});
