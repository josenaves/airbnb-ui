import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'

import Category from './components/Explore/Category';
import Home from './components/Explore/Home';

const {height, width} = Dimensions.get('window');

class Explore extends Component {

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight,
                        backgroundColor: 'white',
                        borderBottomWidth: 1,
                        borderBottomColor: '#dddddd' }}>

                        <View style={{ flexDirection: 'row',
                            padding: 10,
                            backgroundColor: 'white',
                            marginHorizontal: 20,
                            shadowOffset: {width:0, height: 0},
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null }}>

                            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />

                            <TextInput
                                placeholder="Try New Delhi"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white'}}
                            />
                        </View>
                    </View>

                    <ScrollView scrollEventThrottle={16}>
                        <View style={{flex:1, backgroundColor: 'white', paddingTop: 20}}>
                            <Text style={{ fontSize: 24, fontWeight:'700', paddingHorizontal: 20 }}>
                                What can we help you find, Neto?
                            </Text>
                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category
                                        name="Home"
                                        imageUri={require('../assets/home.jpg')}
                                    />

                                    <Category
                                        name="Experiences"
                                        imageUri={require('../assets/experiences.jpg')}
                                    />

                                    <Category
                                        name="Restaurant"
                                        imageUri={require('../assets/restaurant.jpg')}
                                    />
                                </ScrollView>
                            </View>

                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700'}}>
                                    Introducing Airbnb Plus
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10}}>
                                    A new selection of homes verified for qualitiy & confort
                                </Text>

                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}> 
                                    <Image 
                                        source={ require('../assets/home.jpg') } 
                                        style={{ flex: 1, height: null, width: null,
                                            resizeMode: 'cover', borderRadius: 5, borderWidth: 1,
                                            borderColor: '#dddddd'}} 
                                    />
                                </View>

                            </View>
                        </View>

                        <View style={{ marginTop: 40}}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                                Homes around the world
                            </Text>
                            <View style={{paddingHorizontal: 20,
                                marginTop: 20,
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between' }}>

                                <Home
                                    width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4} />
                                    
                                <Home
                                    width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4} />
                                                                    
                                <Home
                                    width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
export default Explore;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});