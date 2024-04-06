import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ExpandableView from '../Tools/ExpandableView';

export default Expandable = ({ title, children, imageBackgroundSrc }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log('imageBackgroundSrc', imageBackgroundSrc);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      fontSize: 42,
    },
    toggle: {
      width: '100%',
      height: 40,
      // backgroundColor: '#81cdc6',
      justifyContent: 'center',
      alignItems: 'center',
    },
    // toggle: toggleStyle,
    toggleText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setIsExpanded(!isExpanded);
        }}
        style={styles.toggle}
      >
        <ImageBackground
          source={{
            uri: imageBackgroundSrc,
          }}
          style={{
            height: 40,
            width: '100%',
            opacity: 0.8,
            position: 'absolute',
          }}
        >
          <LinearGradient
            colors={['black', '#303030', 'transparent']}
            style={{ flex: 1, justifyContent: 'center' }}
            start={[0, 1]}
            end={[1, 0]}
            locations={[0.1, 0.5, 1]}
          ></LinearGradient>
        </ImageBackground>
        <Text style={styles.toggleText}>{title}</Text>
      </TouchableOpacity>
      <ExpandableView expanded={isExpanded} children={children} />
    </View>
  );
};
