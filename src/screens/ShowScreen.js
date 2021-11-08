import React, { useContext } from "react"
import { Context } from "../context/BlogContext"

import {
  View,
  Text,
  StyleSheet,
 
} from "react-native"

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)
  console.log('state', state)

  const id = navigation.getParam("id")
  return (
    <View>
      <View>
        <Text >{id}</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default ShowScreen
