import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default class Header extends React.Component {
    onpress = () => {
        alert('Hamburger!!!');
    };
    
    render() {
        return (
            <View style={{ backgroundColor: this.props.backgroundColor, paddingTop: 22 }}>
                <View style={{ height: 50, flexDirection: 'row', alignItems: 'stretch' }}>
                    <View style={{ flex: 1 }}>
                        <TouchableHighlight style={{padding: 10, alignItems: 'center'}} onPress={this.onpress}>
                            <Image source={require('../assets/icons8-menu-32.png')} />
                        </TouchableHighlight>
                    </View>
                    <Text style={{ paddingTop: 6, flex: 4, alignContent: 'center', textAlign: 'center', fontSize: 30, color: this.props.textColor }}>
                        GatGo
                        </Text>
                    <View style={{ flex: 1 }}></View>
                </View>
            </View>
        );
    }
};
