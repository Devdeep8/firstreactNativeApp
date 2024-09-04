import React, { useState } from 'react';
import { ImageBackground, Text ,View, TextInput, TouchableOpacity , Button, StyleSheet, Alert } from 'react-native';
import { loginUser } from '../services/api';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [searchDestination, setSearchDestination] = useState('');
  const handleLogin = async () => {
    try {
      const response = await loginUser(username, password);
      if (response.message === "Login successful") {
        onLoginSuccess();
      } else {
        Alert.alert('Login Failed', response.message);
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while logging in');
    }
  };

  const handleSearch = () => {
    // Here you would handle the search functionality
    Alert.alert('Search', `Searching for destination: ${searchDestination}`);
  };

  return (
    <ImageBackground
    source={{ uri : "https://wallpaperaccess.com/full/149798.jpg" }}
    style={styles.background}
  >
    <View style={styles.container}>
      <Text style={styles.appTitle}>PlanToAR</Text>
      <Text style={styles.subtitle}>Plan your tour</Text>

      <Text style={styles.loginTitle}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <Icon name="person-outline" size={24} color="#000" />
        <TextInput 
          style={styles.input} 
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock-closed-outline" size={24} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <Text style={styles.orText}>OR</Text>
      
      <Text style={styles.visualizeText}>Visualize your travel destination!!!</Text>
      <Text style={styles.atHomeText}>AT HOME</Text>
      
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={24} color="#000" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search destination"
          value={searchDestination}
          onChangeText={setSearchDestination}
        />
        <TouchableOpacity style={styles.goButton} onPress={handleSearch}>
          <Text style={styles.goButtonText}>GO</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.footerText}>www.PlanToAR.com</Text>
    </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({

    input: {
        flex: 1,
        height: 50,
        marginLeft: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add this line
      },

    background: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    appTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#ffcc00',
    },
    subtitle: {
      fontSize: 16,
      color: '#000',
      marginBottom: 30,
    },
    loginTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#000',
      borderWidth: 1,
      borderRadius: 10,
      marginVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
      width: '100%',
    },
    input: {
      flex: 1,
      height: 50,
      marginLeft: 10,
    },
    loginButton: {
      backgroundColor: '#ffcc00',
      borderRadius: 10,
      paddingVertical: 15,
      alignItems: 'center',
      marginTop: 20,
      width: '100%',
    },
    loginButtonText: {
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
    },
    forgotPassword: {
      color: '#000',
      marginTop: 10,
    },
    orText: {
      marginTop: 20,
      fontSize: 16,
      color: '#000',
    },
    visualizeText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 30,
    },
    atHomeText: {
      fontSize: 16,
      color: '#ff5500',
      marginBottom: 30,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#000',
      borderWidth: 1,
      borderRadius: 10,
      marginVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
      width: '100%',
    },
    searchInput: {
      flex: 1,
      height: 50,
      marginLeft: 10,
    },
    goButton: {
      backgroundColor: '#ffcc00',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    goButtonText: {
      color: '#000',
      fontSize: 16,
    },
    footerText: {
      marginTop: 30,
      fontSize: 16,
      color: '#000',
    },
  });

export default Login;