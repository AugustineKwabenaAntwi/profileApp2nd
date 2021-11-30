import React from 'react';
import { StyleSheet, Text, View,Image,Button} from 'react-native';
import profile2 from "./assets/profile2.jpg"

export default function App() {
  return (
    <View style={styles.container}>

      <View style= {styles.container2}>

        <Image style = {styles.image} source = {profile2} />

        <View style={styles.detailsCont}>
          <Text style ={styles.label}>School</Text>
          <Text style ={styles.info}>Kwame Nkrumah University of Science and Technology</Text>
        </View>

        <View style={styles.detailsCont}>
          <Text style ={styles.label}>Email</Text>
          <Text style ={styles.info}>dontknow@info.com</Text>
        </View>

        <View style={styles.detailsCont}>
          <Text style ={styles.label}>Name</Text>
          <Text style ={styles.info}>Augustine Kwabena Antwi</Text>
        </View>

        <View style={styles.detailsCont}>
          <Text style ={styles.label}>Nick Name</Text>
          <Text style ={styles.info}>austin kobby</Text>
        </View>

        <View style={styles.detailsCont}>
          <Text style ={styles.label}>Emergency Contact</Text>
          <Text style ={styles.info}>i-can-never-be-a-+44</Text>
        </View>

        <Button title='UPDATE PROFILE'></Button>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2:{
    backgroundColor:"white",
    alignItems: 'flex-start',
    justifyContent:"center",
  },
  image:{
    borderRadius:100,
    width:200,
    height:200,
    alignSelf:"center",
    marginVertical:30
  },
  detailsCont:{
    marginHorizontal:30,
    marginVertical:20,
  }
});
