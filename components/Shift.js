import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Time } from './Time';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
    },
    textContainer: {
        alignContent: 'stretch',
        flex: 1,
        left: 12
    }
});

export const Shift = class Shift extends React.Component {
    render() {
        shiftCode = this.props.shiftCode;
        start = this.props.start;
        end = this.props.end;
        department = this.props.department;

        return (
            <TouchableOpacity>
                <View style={{ padding: 10, flexDirection: 'row' }}>
                    <Time start={start} end={end}></Time>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>{shiftCode}</Text>
                        <Text style={styles.textStyle}>{department}</Text>
                    </View>
                </View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}></View>
            </TouchableOpacity>
        );
    };
}
