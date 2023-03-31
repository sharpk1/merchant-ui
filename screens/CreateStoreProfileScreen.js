import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const CreateStoreProfileScreen = () => {
  const [storeName, setStoreName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleCreateProfile = () => {
    // TODO: Implement logic to create store profile
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Store Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Store Name"
        value={storeName}
        onChangeText={setStoreName}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Button
        title="Create Profile"
        onPress={handleCreateProfile}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    width: "80%",
  },
});

export default CreateStoreProfileScreen;
