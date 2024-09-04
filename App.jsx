import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './components/Login';
import LandingPage from './components/LandingPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? ( 
        <LandingPage />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;