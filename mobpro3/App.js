import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import xpage from './components/page/xpage'
import list from './components/page/list'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [page, setPage] = useState('Registration')  

  
  const changePage = (pageName) => {
    setPage(pageName)
  }

  
  if(page == 'Registration')
    return (
      <View>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <xpage registerButtonHandler={() => changePage('Result')}/>
      </View>
    )
  else if(page == 'Result')
    return (
      <View>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <list/>
      </View>
    )
};

export default App;