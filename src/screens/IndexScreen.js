import React, { useContext } from "react"
import { Context } from "../context/BlogContext"
import Feather from "react-native-vector-icons/Feather"

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native"

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context)
  //console.log('state from index screen: ', state)
  return (
    <View>
      <View>
        <FlatList
          data={state}
          keyExtractor={(blogPost) => blogPost.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
              onPress={()=> navigation.navigate('Show', {id: item.id})}
              >
                <View style={styles.row}>
                  <Text style={styles.title}>
                    {item.title} - {item.id}
                  </Text>
                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Feather style={styles.icon} name='trash' />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
      <View style={styles.button}>
        <Button title='Add Post' onPress={addBlogPost} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
})

export default IndexScreen
