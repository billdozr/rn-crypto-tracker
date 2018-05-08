import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Cryptonite</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    paddingTop: 45,
    paddingBottom: 20,
    borderBottomWidth: 2,
    backgroundColor: '#d3d3d3',
    borderColor: '#edecea',
    alignItems: "center",
    shadowColor: "#edecea",
    elevation: 2,
    shadowOpacity: 0.15,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  header: {
    color: '#009900',
    fontWeight: "bold",
    fontSize: 20
  }
});

export default Header
