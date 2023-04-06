import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Chart from "./Chart";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./LoginScreen";
import { worklet } from "react-native-reanimated";

const Drawer = createDrawerNavigator();

const SidebarScreen = ({ navigation }) => {
  // const handleProfilePress = worklet(() => {
  //   console.log("Profile pressed");
  //   navigation.closeDrawer();
  // });

  // const handleSettingsPress = worklet(() => {
  //   console.log("Settings pressed");
  //   navigation.closeDrawer();
  // });

  return (
    <View style={styles.sidebarContainer}>
      <Text style={styles.sidebarHeader}>Menu</Text>
      <TouchableOpacity
        style={styles.sidebarOption}
        // onPress={handleProfilePress}
      >
        <Ionicons
          name="person-outline"
          size={24}
          color="black"
          style={styles.sidebarIcon}
        />
        <Text style={styles.sidebarText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sidebarOption}
        // onPress={handleSettingsPress}
      >
        <Ionicons
          name="settings-outline"
          size={24}
          color="black"
          style={styles.sidebarIcon}
        />
        <Text style={styles.sidebarText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const DashboardScreen = ({ navigation }) => {
  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
        <Ionicons name="menu-outline" size={32} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Dashboard</Text>
      <Text style={styles.text}>Welcome to your dashboard!</Text>
      <Chart />

      <Drawer.Navigator drawerContent={(props) => <SidebarScreen {...props} />}>
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="home-outline"
                size={size}
                color={focused ? "#008080" : "gray"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
  menuButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  sidebarContainer: {
    flex: 1,
    padding: 20,
  },
  sidebarHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  sidebarOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  sidebarIcon: {
    marginRight: 16,
  },
  sidebarText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DashboardScreen;
