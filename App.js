import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image, Switch } from 'react-native';
import ImageGallery from './src/ImageGallery.jsx'
import axios from 'axios';
import { HS_ACCESS_TOKEN } from "@env";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HerosTab from './src/HerosTab/HerosTab.jsx';
import MinionsTab from './src/MinionsTab/MinionsTab.jsx';
import QuestsTab from './src/QuestsTab/QuestsTab.jsx';
import RewardsTab from './src/RewardsTab/RewardsTab.jsx';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [minionCards, setMinionCards] = useState([]);
  const [heroCards, setHeroCards] = useState([]);
  const [questCards, setQuestCards] = useState([]);
  const [rewardCards, setRewardCards] = useState([]);
  const [hasError, setErrorFlag] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const url = 'https://us.api.blizzard.com/hearthstone/cards?locale=en_US&gameMode=battlegrounds&pageSize=1000';
        
    const config = {
      headers: {Authorization: `Bearer ${HS_ACCESS_TOKEN}`},
      signal: abortController.signal
    };

    const minions = (cards) => {
      return cards.filter(card => card.cardTypeId === 4);
    };

    const heros = (cards) => {
      return cards.filter(card => card.cardTypeId === 3);
    };

    const quests = (cards) => {
      return cards.filter(card => card.battlegrounds.quest === true);
    };

    const rewards = (cards) => {
      return cards.filter(card => card.battlegrounds.reward === true);
    };

    const fetchCards = async () => {
      try {
        setIsLoading(true);

        console.log('fetching');
        const response = await axios.get(url, config);

        console.log('card response', response);
        
        if (response.status === 200) {
          console.log('response', response);
          const cards = response.data.cards;

          setMinionCards(minions(cards));
          setHeroCards(heros(cards));
          setQuestCards(quests(cards));
          setRewardCards(rewards(cards));
          setIsLoading(false);
          return;
        } else {
          throw new Error("Failed to fetch cards");
        }
      } catch (error) {
        if (abortController.signal.aborted) {
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
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle: {
          backgroundColor: '#b3e0dc'
        },
        tabBarIconStyle: {
          color: 'red'
        }
      }}>
        <Tab.Screen
          name="Heros"
          options={{
            // tabBarLabelPosition: 'below-icon',
            tabBarIconStyle: {
              color: 'red'
            }
          }}
          children={() => <HerosTab cards={heroCards} />} 
        />
        <Tab.Screen name="Minions" children={() => <MinionsTab cards={minionCards} />} />
        <Tab.Screen name="Quests" children={() => <QuestsTab cards={questCards} />} />
        <Tab.Screen name="Rewards" children={() => <RewardsTab cards={rewardCards} />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});