import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";

import StarRating from 'react-native-star-rating';

class Home extends Component{
    render(){
        return (
            <View style={{ width: this.props.width/2 - 30,
                height: this.props.width/2 - 30,
                borderWidth: 0.5,
                borderColor: '#dddddd'}}>

                <View style={{flex: 1}}>
                    <Image 
                        source={ require('../../../assets/home.jpg') } 
                        style={{ flex: 1, height: null, width: null,
                            resizeMode: 'cover', borderRadius: 5, borderWidth: 1,
                            borderColor: '#dddddd'}} 
                    />
                </View>
                <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10}}>
                    <Text style={{ fontSize: 10, color: '#b63838'}}>{this.props.type}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{this.props.name}</Text>
                    <Text style={{ fontSize: 10 }}>${this.props.price}</Text>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={this.props.rating}
                        starSize={10}
                    />
                </View>
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});