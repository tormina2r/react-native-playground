import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Shift } from './Shift';

export default class ShiftList extends React.Component {
    render() {
        return (
            <View>
                <FlatList data={[
                    { key: '1', shiftCode: 'D', start: '08:00', end: '16:00' },
                    { key: '2', shiftCode: 'A', start: '16:00', end: '22:00' },
                    { key: '3', shiftCode: 'N', start: '22:00', end: '08:00' },
                    { key: '4', shiftCode: 'D', start: '08:00', end: '16:00' },
                    { key: '5', shiftCode: 'A', start: '16:00', end: '22:00' },
                    { key: '6', shiftCode: 'N', start: '22:00', end: '08:00' },
                    { key: '7', shiftCode: 'D', start: '08:00', end: '16:00' },
                    { key: '8', shiftCode: 'A', start: '16:00', end: '22:00' },
                    { key: '9', shiftCode: 'N', start: '22:00', end: '08:00' },
                ]}
                    renderItem={({ item }) => <Shift shiftCode={item.shiftCode} start={item.start} end={item.end} department='UTV - Utviklingsavdelingen'></Shift>}
                />
            </View>
        );
    };
};