
/*import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export function teste () {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('http://192.168.0.39:3000/api/cliente');
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24,marginTop:'25%' }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({_id }, index) => _id}
          renderItem={({ item }) => (
            <Text>{item.cpf}, {item.email}</Text>
          )}
        />
      )}
    </View>
  );
};
 **/
/*import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export function teste () {
//const myDataObject = { nome: `joao vitor`,cpf:'123.444.433-01',email:'joaoa@gmail.com', telefone:'(21)994411344'};

const postData = async ( ) =>{
   const response = await fetch('http://192.168.0.39:3000/api/cliente/6188123b7e03eec5c74019ac', {
       method: 'DELETE', 
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(null)
   });

  const data = await response.json( );
  console.log(data)
  // now do whatever you want with the data  
  

  };
  postData()
   return (<View>
     <Text>aaa</Text>
   </View>
   );
  
};
**/


