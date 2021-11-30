import React from 'react';
import { StyleSheet, Text, View,Image,Pressable} from 'react-native';
import profile2 from "./assets/profile2.jpg"

export default function App(props) {
  const {title ="UPDATE PROFILE"}=props;
  return (
    <View style={styles.container}>

      <View style= {styles.container2}>

        <Image style = {styles.image} source = {profile2} />

        <View style={styles.detailsCont}>
          <Text style ={styles.label}>School</Text>
          <Text style ={styles.info}>Kwame Nkrumah University of Science and Technology</Text>
        </View>

        <View style={styles.detailsCont}>
          <Text style ={styles.label}>Email Address</Text>
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
          <Text style ={styles.info}>i-can-never-be-your-+44</Text>
        </View>

        <Pressable style={styles.btn}>
          <Text style ={styles.btntxt}>{title}</Text>
        </Pressable>

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
    width:150,
    height:150,
    alignSelf:"center",
    marginVertical:30
  },
  detailsCont:{
    marginHorizontal:30,
    marginVertical:20,
  },
  label:{
    color:"#27dc"
  },
  info:{
    fontWeight:"900"
  },
  btn:{
    backgroundColor:"black",
    alignSelf:"center",
    justifyContent:"center",
    marginVertical:30,
    paddingVertical:15,
    paddingHorizontal:80,
    borderRadius:60,
    elevation:2

  },
  btntxt:{
    color:"white",
    fontWeight:"bold",
    fontSize:16,
    letterSpacing:0.5,

  }
});
