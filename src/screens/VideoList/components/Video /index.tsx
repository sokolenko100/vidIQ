import React from 'react';
import { Text, TouchableOpacityProps, TouchableOpacity, View, Image } from 'react-native';
import { styles } from './styles';


interface IVideo {
  item?: any;
}

export type VideoProps = IVideo & TouchableOpacityProps;

/**
 * Common video component
 */
const Video = ({item :{ snippet:{ thumbnails, title, description }}}) => {
const {
  wrapper, 
  imageStyle, 
  textContainer, 
  titleStyle, 
  descriptionStyle
} =  styles;

  return (
    <TouchableOpacity>
      <View style={wrapper}>
        <Image
          source={{uri: thumbnails.medium.url}}
          style={imageStyle}
        />
        <View style={textContainer}>
          <Text style={titleStyle}>
            {title}
          </Text>
          <Text style={descriptionStyle}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Video;
