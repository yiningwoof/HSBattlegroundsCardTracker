import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image, Switch } from 'react-native';
import ImageGallery from './src/ImageGallery.jsx'
import axios from 'axios';
import {REACT_APP_HS_ACCESS_TOKEN} from "@env";

const bear = require('./assets/little_north_baby.png');
const shark = require('./assets/shaxi.png');

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [hasError, setErrorFlag] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const url = 'https://us.api.blizzard.com/hearthstone/cards?locale=en_US&gameMode=battlegrounds';
    const config = {
      headers: {Authorization: `Bearer ${process.env.HS_ACCESS_TOKEN}`},
      signal: abortController.signal
    };

    const fetchCards = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(url, config);

        if (response.status === 200) {
          setCards(response.data.cards);
          setIsLoading(false);
          return;
        } else {
          throw new Error("Failed to fetch cards");
        }
      } catch (error) {
        if (abortController.signal.aborted) {
          console.log("Data fetching cancelled");
        } else {
          setErrorFlag(true);
          setIsLoading(false);
        }
      }
    };

    fetchCards();

    return () => abortController.abort("Data fetching cancelled");
  }, []);


  return (
    <ScrollView style={styles.scrollView}>
      {cards.map(card => 
          <View key={card.id}>
            <Image src={card.battlegrounds.image} style={{width: 300, height: 400}}></Image>
            <Text>
              {card.name}
            </Text>
          </View>
      )}
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});