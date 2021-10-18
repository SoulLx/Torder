import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LaddingPage } from '../pages/laddingPage';
import { UserProfile } from '../pages/userProfile';
import { SearchRestaurant } from '../pages/searchRestaurant';
import { Restaurant } from '../pages/restaurant';
import { Booking } from '../pages/booking';


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
        <stackRoutes.Screen
            name="SearchRestaurant"
            component={SearchRestaurant}
        />
        <stackRoutes.Screen
            name="Restaurant"
            component={Restaurant}
        />
        <stackRoutes.Screen
            name="Booking"
            component={Booking}
        />
    
       

    </stackRoutes.Navigator>
    
)
export default AppRoutes;
