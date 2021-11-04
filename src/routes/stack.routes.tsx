import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LaddingPageClient } from '../pages/laddingPage Client';
import { UserProfile } from '../pages/userProfile';
import { SearchRestaurant } from '../pages/searchRestaurant';
import { RestaurantClient } from '../pages/restaurantClient';
import { Booking } from '../pages/booking';
import { UserSettings } from '../pages/userProfile/userSettings';
import { RestaurantLadding } from '../pages/restaurantLadding';
import { LaddingPageRestaurant } from '../pages/laddingPage Restaurant';
import { RestaurantIn } from '../pages/restaurantIn';
import { Book } from '../pages/book';
import { Table } from '../pages/table';
import { RestaurantProfileSettings } from '../pages/restaurantProfileSettings';
import { teste } from '../teste';

const stackRoutes = createNativeStackNavigator();


const AppRoutes: React.FC= ()=> (
    
    <stackRoutes.Navigator
        screenOptions={{headerShown:false}}
    >
        <stackRoutes.Screen
            name="teste"
            component={teste}
        />
          <stackRoutes.Screen
            name="LaddingPageClient"
            component={LaddingPageClient}
        />
        <stackRoutes.Screen
            name="RestaurantIn"
            component={RestaurantIn}
        />
        
        <stackRoutes.Screen
            name="LaddingPageRestaurant"
            component={LaddingPageRestaurant}
        />
      
      <stackRoutes.Screen
            name="RestaurantProfileSettings"
            component={RestaurantProfileSettings}
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
            name="RestaurantClient"
            component={RestaurantClient}
        />
        <stackRoutes.Screen
            name="Booking"
            component={Booking}
        />
        <stackRoutes.Screen
            name="UserSettings"
            component={UserSettings}
        />
        <stackRoutes.Screen
            name="RestaurantLadding"
            component={RestaurantLadding}
        />
        <stackRoutes.Screen
            name="Book"
            component={Book}
        />
        <stackRoutes.Screen
            name="Table"
            component={Table}
        />
       

    </stackRoutes.Navigator>
    
)
export default AppRoutes;
