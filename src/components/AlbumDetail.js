import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// This is a functional component
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url} = album;
  const {
    thumbnailStyle,
    headerContainerStyle,
    thumbnailContaineStyle,
    headerTextStyle,
    imageStyle
 } = styles;
  return (
    <Card>
      <CardSection>
       <View style={thumbnailContaineStyle}>
        <Image
          style= { thumbnailStyle }
          source={{ uri:thumbnail_image }} />
       </View>
       <View style={headerContainerStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
       </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};
const styles = {
  headerContainerStyle:{
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginleft: 10
  },
  headerTextStyle:{
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  thumbnailContaineStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }

}
export default AlbumDetail;
