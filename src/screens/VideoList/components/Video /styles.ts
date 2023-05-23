import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  imageStyle: {
    borderWidth: 2,
  },
  textContainer: {
    marginLeft: 15
  },
  titleStyle:{
    fontSize: 16,
    fontWeight: 'bold'
  },
  descriptionStyle:{
    fontSize: 12,
    marginTop: 4
  }
});

export { styles };
