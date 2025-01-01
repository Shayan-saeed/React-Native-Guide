import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

export default function Index() {

  const basicComponents = [
    {
      id: 0,
      name: 'View',
      description: 'The most fundamental component for building a UI.'
    },
    {
      id: 1,
      name: 'Text',
      description: 'A component for displaying text.'
    },
    {
      id: 2,
      name: 'Image',
      description: 'A component for displaying images.'
    },
    {
      id: 3,
      name: 'TextInput',
      description: 'A component for inputting text into the app via a keyboard.'
    },
    {
      id: 4,
      name: 'ScrollView',
      description: 'Provides a scrolling container that can host multiple components and views.'
    },
    {
      id: 5,
      name: 'StyleSheet',
      description: 'Provides an abstraction layer similar to CSS stylesheets.'
    }
  ]
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Image source={require('../assets/images/react-logo.png')}
            style={style.headerImage}
          />
          <Text
            style={style.textHeader}
          >
            React Native
          </Text>
        </View>
        <View
          style={{
            paddingInline: 30,
            paddingVertical: 10
          }}
        >
          <Text style={[style.text, style.screenHeader]}>Core Components</Text>
          <Text style={style.text}>React Native provides a number of built-in Core Components ready for you to use in your app.</Text>
        </View>
        <View style={{
          paddingVertical: 20
        }}>
          <Text style={[style.text, style.heading]}>Basic Components</Text>
          {basicComponents.map((item) => (
            <View key={item.id} style={style.basicComponentView}>
              <Text style={[style.text, {
                backgroundColor: '#07bbed',
                width: '100%',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                padding: 7,
              }]}
              >
                {item.name}
              </Text>
              <Text style={[style.text, {
                padding: 7,
              }]}>{item.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  textHeader: {
    color: 'white',
    fontSize: 25
  },
  headerImage: {
    height: 50,
    width: 50,
    marginVertical: 20,
  },
  text: {
    color: 'white'
  },
  heading: {
    fontSize: 23,
    marginHorizontal: 15,
    paddingBottom: 15
  },
  screenHeader: {
    fontSize: 35,
    fontWeight: 700,
  },
  basicComponentView: {
    width: 330,
    borderRadius: 10,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    marginHorizontal: 15,
    height: 100,
    marginBottom: 10
  }
})
