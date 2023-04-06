import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SignupForm = ({ navigation }) => {
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

    navigation.navigate("Dashboard");
  };

  const handleAddressSelect = () => {
    console.log("hey");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Business Name"
          value={businessName}
          onChangeText={setBusinessName}
        />
      </View>
      <View style={styles.inputContainer}>
        <GooglePlacesAutocomplete
          placeholder="Business Address"
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
              borderWidth: 0,
              paddingHorizontal: 0,
              borderRadius: 15,
              backgroundColor: "#fff",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              marginBottom: 20,
            },
            textInput: {
              height: 40,
              paddingHorizontal: 10,
              backgroundColor: "#fff",
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
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
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
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 0,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 50,
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
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 18,
    color: "#008080",
  },
});

export default SignupForm;
