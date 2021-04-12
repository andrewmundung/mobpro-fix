import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

const tombol = ({label, handler}) => {
    return (
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={{
            width: '100%', 
            height: 35, 
            backgroundColor: '#C237CE',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center'
            }} onPress={handler}>
                <Text style={{color: 'white'}}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

module.exports = tombol