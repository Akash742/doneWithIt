import { React, useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  Modal,
  Button,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

function AppPicker({
  icon,
  items,
  width = "100%",
  PickerItemComponent = PickerItem,
  numberOfColumns,
  placeholder,
  selectedItem,
  onSelectItem,
}) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisibleModal(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons size={30} name={icon} style={styles.icon} />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons size={20} name={"chevron-down"} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visibleModal} animationType="slide">
        <Button title="Close" onPress={() => setVisibleModal(false)} />
        <FlatList
          data={items}
          numColumns={numberOfColumns}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              label={item.label}
              onPress={() => {
                setVisibleModal(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    borderColor: colors.medium,
    borderWidth: 2,
    padding: 10,
    marginVertical: 10,
    flexDirection: "row",
  },
  icon: {
    marginRight: 8,
    color: colors.medium,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
