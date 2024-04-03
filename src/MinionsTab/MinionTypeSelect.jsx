import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Switch, Button } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const typeMapping = {
    11: 'undead',
    14: 'murloc',
    15: 'demon',
    17: 'mech',
    18: 'elemental',
    20: 'beast',
    23: 'pirate',
    24: 'dragon',
    26: 'all',
    43: 'quilboar',
    92: 'naga'
}

const types = [
    {
        value: 26,
        label: 'All Type'
    },
    {
        value: 20,
        label: 'Beast'
    },
    {
        value: 15,
        label: 'Demon'
    },
    {
        value: 24,
        label: 'Dragon'
    },
    {
        value: 18,
        label: 'Elemental'
    },
    {
        value: 14,
        label: 'Murloc'
    },
    {
        value: 92,
        label: 'Naga'
    },
    {
        value: 17,
        label: 'Mech'
    },
    {
        value: 23,
        label: 'Pirate'
    },
    {
        value: 43,
        label: 'Quilboar'
    },
    {
        value: 11,
        label: 'Undead'
    },
    {
        value: 0,
        label: 'No Type'
    }
];

export default MinionTypeSelect = ({ onMinionTypeChange }) => {
    const [minionTypeId, setMinionTypeId] = useState();

    return (
        <Dropdown 
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            iconStyle={styles.iconStyle}
            maxHeight={200}
            value={minionTypeId}
            data={types}
            search
            valueField="value"
            labelField="label"
            placeholder="Select minion type"
            searchPlaceholder="Search..."
            onChange={e => onMinionTypeChange(e.value)}
        />
    )
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