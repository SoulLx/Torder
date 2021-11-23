import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
import { ArrowLeft } from 'react-native-feather';
import styles from '../menuItem/styles';

export function MenuItem({navigation}:{navigation:any}) {
    const category = [
        {id: '1', name: "Hamburguer", price: 10.00.toFixed(2), description: "Hamburguer com carne, alface e queijo"},
        {id: '2', name: "Sorvete", price: 3.50.toFixed(2), description: "Sorvete de chocolate com baunilha"},
        {id: '3', name: "Big Mac", price: 15.00.toFixed(2), description: "O maior hamburguer da casa"},
        {id: '4', name: "Sunday", price: 5.00.toFixed(2), description: "sunday cheio de frufru"},
        {id: '5', name: "Mc Lanche Feliz", price: 20.00.toFixed(2), description: "com brinde especial"},
    
      ]

      function ItemMenu({nameItem, priceItem, descItem}){
        return(                       
              <View style={styles.itemMenu}>                
                <View style={styles.viewInfoItem}>
                  <Text style={styles.itemName}>{nameItem}</Text>
                       
                  <Text style={styles.itemDesc}> {descItem}</Text>
                  <Text style={styles.itemPrice}> R$ {priceItem}</Text>
                </View>                
              </View>                                                       
        )
        }

  return (
      
    <SafeAreaView style={styles.container}>
        <View style={styles.viewHeader}>
            <View style={styles.viewArrowBack}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft
                        stroke="black" 
                        width="30"
                        height="30" 
                    />                    
                </TouchableOpacity>                
            </View>
            <View style={styles.viewCategory}>
              <Text style={styles.lblCategoty}>Lanches</Text>
            </View>
            
        </View>

      <FlatList  
        style={styles.listItem}
        data={category}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return(
            <ItemMenu nameItem={item.name} priceItem={item.price} descItem={item.description}/>
          )        
        }}
      />
     </SafeAreaView>
  );
}
