import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Switch, Button } from 'react-native';
import { SelectMinionType } from 'react-native-element-dropdown';
import MinionTypeSelect from './MinionTypeSelect';

export default MinionsTab = ({ cards }) => {
    const [filteredCards, setFilteredCards] = useState(cards);

    const onMinionTypeChange = (id) => {
        setFilteredCards(cards);
        let filtered;
        if (id === 0) {
            filtered = cards.filter(card => {
                console.log(!card.minionTypeId);
                return !card.minionTypeId
            });
        } else {
            filtered = cards.filter(card => {
                return (card.minionTypeId && card.minionTypeId === id) || (card.multiClassIds && card.multiClassIds.includes(id));
            });
        }
        setFilteredCards(filtered);
    }
    return (
        <ScrollView style={styles.scrollView}>
            <MinionTypeSelect onMinionTypeChange={onMinionTypeChange}></MinionTypeSelect>
            {filteredCards.map(card => 
                <View key={card.id}>
                    <Image src={card.battlegrounds.image} style={{width: 300, height: 400}}></Image>
                    <Text>
                        {card.name}
                    </Text>
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
});