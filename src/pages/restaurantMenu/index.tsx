import React, { useState } from 'react';
import { View, Text, ScrollView , FlatList, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { Bold } from 'react-native-feather';
import styles from './styles';


export function RestaurantMenu({navigation}:{navigation:any}) {

  const category = [ 
    {id: '1', name: 'Entrada'},
    {id: '2', name: 'Lanches'}, 
    {id: '3', name: 'Sobremesas'}, 
    {id: '4', name: 'Especiais'},
  
    

  ]

  function ItemCategory({nameCategory}){
      return(
          <TouchableOpacity style={styles.itemMenu} onPress={()=>{navigation.navigate('MenuItem')}}>           
            <View style={styles.viewImageCategory}>
              <Image style={styles.imageItem} source={require("../../assets/bigmac.jpg")}/>              
            </View>                               
            <View style={styles.viewNameCategory}>
              <Text style={{fontSize:17, textAlign: 'left'}}>{nameCategory}</Text>     
            </View>
          </TouchableOpacity>
        

      )
      }

  return (          
    <SafeAreaView style={styles.container}>
      <View style={styles.view2}>
        <View style={styles.view1}>
          <Image style={styles.imageLogo}source={require("../../assets/mc-logo.png")}/>
          <Text style={{fontWeight: 'bold', fontSize: 24}}>McDonald's</Text>
        </View>
      </View>
      
      
      <Text style={{fontSize:17}}>Cardápio</Text>
      <FlatList 
        style={styles.list}
        data={category}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return(
            <ItemCategory nameCategory={item.name}/>
          )        
        }}
      />
    </SafeAreaView>    
  );
}