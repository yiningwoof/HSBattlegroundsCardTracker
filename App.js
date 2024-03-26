import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image, Switch } from 'react-native';
import ImageGallery from './src/ImageGallery.jsx'
import axios from 'axios';

const bear = require('./assets/little_north_baby.png');
const shark = require('./assets/shaxi.png');

export default function App() {
  const [isBear, setIsBear] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [hasError, setErrorFlag] = useState(false);

  // const toggleSwitch = () => setIsBear(previousState => !previousState);

  // const instance = axios.create({
  //   baseUrl: baseUrl,
  //   headers: {Authorization: 'Bearer USsW22fLhbROeh17DM0ina2Td9iXCfSaGm'}
  // });

  // instance.get('/path').then(res => data = res.data);

  // axios.get(baseUrl, config).then(res => {
  //   console.log(res.data);
  //   data = res.data.cardCount;
  //   image = res.data.cards[0].image;
  // }).catch(err => console.error(err));

  useEffect(() => {
    const abortController = new AbortController();
    const url = 'https://us.api.blizzard.com/hearthstone/cards?locale=en_US&gameMode=battlegrounds';
    const config = {
      headers: {Authorization: `Bearer USsW22fLhbROeh17DM0ina2Td9iXCfSaGm`},
      signal: abortController.signal
    };

    const fetchCards = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(url, config);

        console.log(response);
        if (response.status === 200) {
          console.log('response.status', response.status);
          console.log('response.data.cards', response.data.cards);
          // const cleanedUpCards = ...response.data.cards;
          // console.log('cleanedUpCards', cleanedUpCards);
          setCards(response.data.cards);
          setImage(response.data.cards[0].image);
          setName(response.data.cards[0].name);
          setIsLoading(false);
          console.log('cards', cards.slice(0, 2));
          console.log('cards[0].name', cards[0].name);
          console.log(cards.slice(0, 10));
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
      {/* <Text>{isBear ? 'Little North Baby' : 'Shaxi'}</Text>
      <Image source={isBear ? bear : shark} style={{width: 300, height: 300}}></Image>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isBear ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isBear}
      />
      <StatusBar style="auto" /> */}
      {/* <ImageGallery /> */}
      {/* <Image source={isBear ? bear : shark} style={{width: 300, height: 300}}></Image> */}
      {cards.map(card => 
          <View>
            <Image src={card.battlegrounds.image} style={{width: 300, height: 400}}></Image>
            <Text>
              {card.name}
            </Text>
          </View>
      )}
    </ScrollView>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#faf0e6',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

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