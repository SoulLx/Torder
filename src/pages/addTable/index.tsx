import React, {useState} from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { ArrowLeft } from 'react-native-feather';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function AddTable() {
    const navigation = useNavigation();
    const [chair, setChair] = useState(['1','2','3','4','5','6','7','8','9','10']);
    const [selectedChair, setSelectedChair] = useState([]);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topView}>
                <TouchableOpacity style={styles.backtouch} onPress={() => navigation.goBack()}>
                    <ArrowLeft           
                        stroke="black" 
                        width="30"
                        height="30"           
                    /> 
                </TouchableOpacity>
                <Text style={styles.title}>Adicionar Mesa</Text>
                <Text style={styles.labelName}>Nome da Mesa</Text>
                <TextInput 
                    style={styles.nameTable}
                    placeholder={"Digite aqui"}
                    ></TextInput>
                <Text style={styles.labelChair}>Quantidade de Cadeiras</Text>

                <Picker
                    style={styles.pickerTable}
                    selectedValue={selectedChair}
                    onValueChange={(itemValue) =>
                        setSelectedChair(itemValue)
                    }                    
                    >
                    {
                        chair.map(cr => {
                            return <Picker.Item label={cr} value={cr}/>
                        })
                    }
                </Picker>
            </View>
            
            <View style={styles.addButtonView}>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={{fontWeight: 'bold', padding: 10, fontSize: 18}}>Adicionar</Text>
                </TouchableOpacity>
            </View>      
        </SafeAreaView>
    );
}