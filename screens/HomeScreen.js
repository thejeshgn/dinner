import React from 'react';
import {
  Image,
  Alert,
  Button,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  constructor() {
      super()
      this.state = {
         suggestedText: 'Chapathi and chicken curry'
      }
   }

  render() {

    const _onPressNoooo = () => {
      this.setState({suggestedText: 'My Changed Text'})
    };

    return (
      <View style={styles.container} >
        <ScrollView contentContainerStyle={styles.contentContainer}>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>
              What&lsquo;s for Dinner?
            </Text>


            <Text style={styles.suggestionText}>
              {this.state.suggestedText} 
            </Text>


            <Button 
              onPress={_onPressNoooo}
              title="&nbsp;&nbsp;&nbsp;No!&nbsp;&nbsp;"
              color= 'rgba(255,116,140,1)'
              accessibilityLabel="No!"
            ></Button>

          </View>

        </ScrollView>
      </View>
    );


  }




  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
            
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          
        </Text>
      );
    }
  }





  _handleLearnMorePress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 0,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 80,
    height:'100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },

  getStartedText: {
    fontSize: 32,
    color: 'rgba(255,116,140,1)',
    lineHeight: 34,
    textAlign: 'center',
  },

  suggestionText: {
    fontSize: 24,
    color: '#3b8dbd',
    lineHeight: 30,
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,

  },


  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },

});
