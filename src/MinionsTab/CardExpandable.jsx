import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import ExpandableView from '../Tools/ExpandableView';

export default CardExpandable = ({ title, card }) => {
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

  return (
    <Expandable
      title={title}
      isCardExpandable={true}
      imageBackgroundSrc={card.cropImage}
    >
      <Child />
    </Expandable>
  );
};
