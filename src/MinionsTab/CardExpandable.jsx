import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import ExpandableView from '../Tools/ExpandableView';

export default CardExpandable = ({ title, card }) => {
  console.log('CardExpandable', card);
  console.log('CardExpandable', title);
  const Child = () => {
    return (
      <View key={card.id}>
        <Image
          src={card.battlegrounds.image}
          style={{ width: 300, height: 400 }}
        ></Image>
        <Text>{card.name}</Text>
      </View>
    );
  };

  // const toggleStyle = {
  //   width: '100%',
  //   height: 30,
  //   backgorundImage: card.cropImage,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // };
  return (
    <Expandable title={title} imageBackgroundSrc={card.cropImage}>
      <Child />
    </Expandable>
  );
};
