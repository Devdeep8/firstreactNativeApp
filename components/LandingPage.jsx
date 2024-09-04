import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

const DestinationCard = ({ title, imageUrl }) => (
  <View style={styles.destinationCard}>
    <Image source={imageUrl} style={styles.destinationImage} />
    <Text style={styles.destinationText}>{title}</Text>
    <TouchableOpacity style={styles.exploreButton}>
      <Text style={styles.exploreText}>Explore</Text>
    </TouchableOpacity>
  </View>
);

export default function LandingPage() {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Searching for:', { destination, duration, budget });
  };

  const handleCategoryPress = (category) => {
    // Implement category selection functionality here
    console.log('Selected category:', category);
  };

  const handleExplore = (title) => {
    // Implement explore functionality here
    console.log('Exploring:', title);
  };

  const handleARExperience = () => {
    // Implement AR experience launch here
    console.log('Launching AR experience');
  };

  const handleVRExperience = () => {
    // Implement VR experience start here
    console.log('Starting VR experience');
  };

  const handleWeather = () => {
    // Implement weather information functionality here
    console.log('Showing weather information');
  };

  const handleLocalAttractions = () => {
    // Implement local attractions functionality here
    console.log('Showing local attractions');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>PlanToAR</Text>
        <View style={styles.rewardsSignUp}>
          <Text style={styles.rewardsText}>Rewards</Text>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Where do you want to go?"
          value={destination}
          onChangeText={setDestination}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Duration"
          value={duration}
          onChangeText={setDuration}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Budget"
          value={budget}
          onChangeText={setBudget}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        {['Popular', 'Beach', 'Mountains', 'Cities', 'Adventure'].map((category) => (
          <TouchableOpacity
            key={category}
            style={styles.categoryButton}
            onPress={() => handleCategoryPress(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Destination Cards */}
      <View style={styles.destinations}>
  <DestinationCard
    title="Taj Mahal, India"
    imageUrl={{ uri: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' }}
  />
  <DestinationCard
    title="Eiffel Tower, Paris"
    imageUrl={{ uri: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' }}
  />
  <DestinationCard
    title="Great Wall, China"
    imageUrl={{ uri: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' }}
  />
  <DestinationCard
    title="Machu Picchu, Peru"
    imageUrl={{ uri: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' }}
  />
</View>

      {/* AR/VR Experience */}
      <View style={styles.experienceSection}>
        <Text style={styles.experienceText}>Experience in AR</Text>
        <TouchableOpacity style={styles.experienceButton} onPress={handleARExperience}>
          <Text style={styles.experienceButtonText}>Launch AR Camera</Text>
        </TouchableOpacity>
        <Text style={styles.experienceText}>Immersive VR Tours</Text>
        <TouchableOpacity style={styles.experienceButton} onPress={handleVRExperience}>
          <Text style={styles.experienceButtonText}>Start VR Experience</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={handleWeather}>
          <Text style={styles.footerText}>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={handleLocalAttractions}>
          <Text style={styles.footerText}>Local Attractions</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rewardsSignUp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rewardsText: {
    marginRight: 10,
  },
  signUpButton: {
    backgroundColor: '#ffa500',
    padding: 10,
    borderRadius: 5,
  },
  signUpText: {
    color: '#fff',
  },
  searchBar: {
    padding: 10,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  searchButton: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  categoryButton: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
  },
  categoryText: {
    fontSize: 14,
  },
  destinations: {
    padding: 10,
  },
  destinationCard: {
    backgroundColor: '#f5f5f5',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  destinationImage: {
    width: '100%',
    height: 150,
  },
  destinationText: {
    fontSize: 18,
    padding: 10,
  },
  exploreButton: {
    backgroundColor: '#1e90ff',
    padding: 10,
    alignItems: 'center',
  },
  exploreText: {
    color: '#fff',
  },
  experienceSection: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  experienceText: {
    fontSize: 18,
    marginBottom: 10,
  },
  experienceButton: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  experienceButtonText: {
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  footerButton: {
    padding: 10,
  },
  footerText: {
    fontSize: 14,
  },
});