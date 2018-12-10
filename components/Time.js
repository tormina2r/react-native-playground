import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});

export const Time = class Time extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.textStyle}>{this.props.start}</Text>
                <Text style={styles.textStyle}>{this.props.end}</Text>
            </View>
        );
    };
}
