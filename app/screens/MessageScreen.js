import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Constants from "expo-constants";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import useApi from "../hooks/useApi";
import messagesApi from "../api/messages";
import useAuth from "../auth/useAuth";
import authApi from "../api/auth";
import storage from "../auth/storage";
import routes from "../navigation/routes";

/*const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/Akash.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/Akash.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 4,
    title: "T4",
    description: "D4",
    image: require("../assets/Akash.jpg"),
  },
];*/
function MessageScreen({navigation}) {
  /*const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);*/

  const getMessagesApi = useApi(messagesApi.getMessage)

  useEffect(() => {
    getMessagesApi.request();
  }, [])
  /*const handleDelete = (message) => {
   const newMessages = messages.filter( m => m.id !== message.id)
   setMessages(newMessages)
  } ---> Done in Tutorial */

  function handleDelete(message) {
    setMessages(messages.filter((m) => m.id !== message.id)); // Done by Me..
  }
  return (
    <Screen>
      <FlatList
        data={getMessagesApi.data}
        keyExtractor={(messages) => messages.id } 
        renderItem={({ item }) => (
          <ListItem
            title={item.fromUser.name}
            subTitle={item.content}
            //image={item.image}
           // onPress={() => navigation.navigate(routes.MESSAGE_DETAILS, item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        /*refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}*/
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  /*msgContainer: {
        paddingTop: Constants.statusBarHeight
    }*/
});

export default MessageScreen;
