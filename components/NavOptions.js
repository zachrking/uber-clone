import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/themed';

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen'
    }
];

const NavOptions = () => {
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={tw`p-2 pb-5 pl-6 pt-4 bg-gray-200 m-2`}
                >
                    <Image
                        style={{ width: 120, height: 120, resizeMode: 'contain' }}
                        source={{ uri: item.image }}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowright" 
                        color="white" 
                        type="antdesign"
                    />
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions;