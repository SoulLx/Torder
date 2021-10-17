import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LaddingPage } from '../pages/laddingPage';
import { UserProfile } from '../pages/userProfile';


const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC= ()=> (
    
    <stackRoutes.Navigator
         screenOptions={{headerShown:false}}
    >
        <stackRoutes.Screen
            name="LaddingPage"
            component={LaddingPage}
        />
        <stackRoutes.Screen
            name="UserProfile"
            component={UserProfile}
        />
       

    </stackRoutes.Navigator>
    
)
export default AppRoutes;
