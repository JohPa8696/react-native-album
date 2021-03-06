import React from 'react';
import { View } from 'react-native';
const Card = (props) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
     {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elavation: 1,
      marginleft: 5,
      marginRight: 5,
      margintop: 15
  }
};

export default Card;
