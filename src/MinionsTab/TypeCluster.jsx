import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Expandable from './Expandable';
import CardExpandable from './CardExpandable';

export default TypeCluster = ({ type, cards }) => {
  return (
    <View>
      <Text style={styles.header}>{type}</Text>
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

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#d2be97',
    fontSize: 16,
    padding: 4,
    textAlign: 'center',
  },
});
