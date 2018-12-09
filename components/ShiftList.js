import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Shift from './Shift';

export default class ShiftList extends React.Component {
    render() {
        return (
            <View>
                <FlatList data={[
                    { key: '1', shiftCode: 'D', start: '08:00', end: '16:00' },
                    { key: '2', shiftCode: 'A', start: '16:00', end: '22:00' }
                ]}
                    renderItem={({ item }) =>
                        <View style={{ padding: 10, flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{fontSize: 20}}>{item.start}</Text>
                                <Text style={{fontSize: 20}}>{item.end}</Text>
                            </View>
                            <Text style={{fontSize: 20, textAlignVertical: 'center'}}>{item.shiftCode}</Text>
                        </View>}
                />
            </View>
        );
    };
};