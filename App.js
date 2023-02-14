import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from "react";
import Header from "./components/Header";
import Homescreen from "./Screens/Homescreen";
import {ScreenType} from "./constants/constants";
import AddNote from "./Screens/AddNote";
import AllNotesScreen from "./Screens/AllNotesScreen";
import BackButton from "./components/BackButton";


  export default function App() {
  const [screen, setScreen] = useState(ScreenType.home);
  let content;
  if(screen=== ScreenType.addNote){
      content = <AddNote/>
  }else if(screen === ScreenType.allNotes){
      content = <AllNotesScreen/>
  }else if(screen === ScreenType.home){
      content = <Homescreen onExit={ (data) => {
          setScreen(data);
      }}/>
  }

    return (
        <View style={styles.container}>
            <Header/>
            <BackButton onButtonClick={(data)=> setScreen(data)}/>
            <StatusBar style="auto"/>
            {content}
        </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
