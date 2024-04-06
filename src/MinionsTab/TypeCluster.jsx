import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import Expandable from './Expandable';
import CardExpandable from './CardExpandable';

export default TypeCluster = ({ type, cards }) => {
  return (
    <View>
      <Text>{type}</Text>
      {cards.length ? (
        cards.map((card) => (
          <CardExpandable title={card.name} card={card} key={card.id} />
        ))
      ) : (
        <Text>No cards</Text>
      )}
    </View>
  );
};
