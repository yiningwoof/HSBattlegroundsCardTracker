import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import MinionTypeFilterDropdown from './MinionTypeFilterDropdown';
import MinionTierFilterDropdown from './MinionTierFilterDropdown';
import MinionSortDropdown from './MinionSortDropdown';
import ExpandableView from '../Tools/ExpandableView';

export default MinionsTab = ({ cards }) => {
  const [filteredCards, setFilteredCards] = useState(cards);
  const [allFilters, setAllFilters] = useState({});
  const [sortable, setSortable] = useState();
  const [isExpanded, setIsExpanded] = useState(false);

  const onMinionTypeChange = (id) => {
    setAllFilters({ ...allFilters, type: id });
  };

  const onMinionTierChange = (tier) => {
    setAllFilters({ ...allFilters, tier: tier });
  };

  const onMinionSortableChange = (sortable) => {
    setSortable(sortable);
  };

  const sortCards = (sortable, sortableCards) => {
    let sortedCards;
    if (sortable === 'tier') {
      sortedCards = sortableCards.sort(
        (a, b) => a.battlegrounds.tier - b.battlegrounds.tier
      );
    } else if (sortable === 'type') {
      const noTypes = sortableCards.filter((card) => !card.minionTypeId);
      const typed = sortableCards.filter((card) => card.minionTypeId);
      sortedCards = typed.sort((a, b) => a.minionTypeId - b.minionTypeId);
      sortedCards.push(...noTypes);
    }
    return sortedCards;
  };

  useEffect(() => {
    const type = allFilters.type;
    const tier = allFilters.tier;

    let allFiltersApplied = cards;

    if (type) {
      if (type === -1) {
        allFiltersApplied = cards.filter((card) => !card.minionTypeId);
      } else {
        allFiltersApplied = cards.filter((card) => {
          return (
            (card.minionTypeId && card.minionTypeId === type) ||
            (card.multiClassIds && card.multiClassIds.includes(type))
          );
        });
      }
    }

    if (tier) {
      allFiltersApplied = allFiltersApplied.filter(
        (card) => card.battlegrounds.tier === tier
      );
    }

    if (sortable) {
      allFiltersApplied = sortCards(sortable, allFiltersApplied);
    }

    setFilteredCards(allFiltersApplied);
  }, [allFilters, sortable]);

  return (
    <ScrollView style={styles.scrollView}>
      <Text>Filter by</Text>
      <MinionTypeFilterDropdown onMinionTypeChange={onMinionTypeChange} />
      <MinionTierFilterDropdown onMinionTierChange={onMinionTierChange} />
      <Text>Sort by</Text>
      <MinionSortDropdown onMinionSortableChange={onMinionSortableChange} />
      {filteredCards.length === 0 ? (
        <Text>No cards found.</Text>
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => {
              setIsExpanded(!isExpanded);
            }}
            style={styles.toggle}
          >
            <Text style={styles.toggleText}>Expand</Text>
          </TouchableOpacity>
          <ExpandableView expanded={isExpanded} />
          {filteredCards.map((card) => (
            <View key={card.id}>
              <Image
                src={card.battlegrounds.image}
                style={{ width: 300, height: 400 }}
              ></Image>
              <Text>{card.name}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  toggle: {
    width: 100,
    height: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    color: '#fff',
  },
});
