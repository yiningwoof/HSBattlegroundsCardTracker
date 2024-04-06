import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Switch,
  Button,
} from 'react-native';

export default QuestsTab = ({ cards }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {cards.map((card) => (
        <View key={card.id}>
          <Image
            src={card.battlegrounds.image}
            style={{ width: 300, height: 400 }}
          ></Image>
          <Text>{card.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
