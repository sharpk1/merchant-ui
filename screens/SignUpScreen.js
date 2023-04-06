import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SignupForm = () => {
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = () => {
    // Handle sign up logic here, for example by calling an authentication API
    console.log("Business name:", businessName);
    console.log("Business address:", businessAddress);
    console.log("First name:", firstName);
    console.log("Last name:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);
  };

  const handleAddressSelect = () => {
    console.log("hey");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Business Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your business name"
        value={businessName}
        onChangeText={setBusinessName}
      />
      <Text style={styles.label}>Business Address</Text>
      <GooglePlacesAutocomplete
        placeholder="Enter your business address"
        onPress={handleAddressSelect}
        query={{
          key: "YOUR_API_KEY_HERE",
          language: "en",
          components: "country:us", // Restrict results to the United States
        }}
        fetchDetails
        styles={{
          container: {
            flex: 0,
          },
          textInputContainer: {
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            marginBottom: 20,
          },
          textInput: {
            height: 40,
            paddingHorizontal: 10,
          },
          listView: {
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
          },
          description: {
            fontSize: 16,
          },
        }}
      />
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your first name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your last name"
        value={lastName}
        onChangeText={setLastName}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#008080",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default SignupForm;
