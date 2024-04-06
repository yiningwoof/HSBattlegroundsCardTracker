import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const tiers = [
  {
    value: 1,
    label: 'Tier 1',
  },
  {
    value: 2,
    label: 'Tier 2',
  },
  {
    value: 3,
    label: 'Tier 3',
  },
  {
    value: 4,
    label: 'Tier 4',
  },
  {
    value: 5,
    label: 'Tier 5',
  },
  {
    value: 6,
    label: 'Tier 6',
  },
  {
    value: 7,
    label: 'Tier 7',
  },
];

export default MinionTierFilterDropdown = ({ onMinionTierChange }) => {
  const [minionTierId, setMinionTierId] = useState();

  return (
    <Dropdown
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      iconStyle={styles.iconStyle}
      maxHeight={200}
      value={minionTierId}
      data={tiers}
      valueField='value'
      labelField='label'
      placeholder='tier'
      onChange={(e) => onMinionTierChange(e.value)}
    />
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
  dropdown: {
    margin: 16,
    height: 50,
    width: 150,
    backgroundColor: '#EEEEEE',
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
