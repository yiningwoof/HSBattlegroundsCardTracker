import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const sortables = [
  {
    value: 'type',
    label: 'type',
  },
  {
    value: 'tier',
    label: 'tier',
  },
];

export default MinionSortDropdown = ({ onMinionSortableChange }) => {
  const [sortable, setSortable] = useState();

  return (
    <Dropdown
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      iconStyle={styles.iconStyle}
      maxHeight={200}
      value={sortable}
      data={sortables}
      valueField='value'
      labelField='label'
      placeholder='sort by...'
      onChange={(e) => onMinionSortableChange(e.value)}
    />
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
