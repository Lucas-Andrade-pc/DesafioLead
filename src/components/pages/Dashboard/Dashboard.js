import React,{useEffect,useState ,useReducer} from 'react';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { View,Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux'
import {search} from '../../../services/tmdb'
import {Movies, 
        Search,
        Title,
        ScrollMovies,
        ImageMovies,
        TouchButton 
} from './styles';


export default Dashboard = ({title, items,count}) => {  
    //const contador = useSelector(state => state.count) 
    console.log("recebi", items)
    function sobreFilme(overview){    
       console.log(overview)
    }
    return (
        <Movies>      
            <Title style={{fontSize: count}}> {title} </Title>
            <ScrollMovies key={items.id} horizontal={true}>
                {items.length > 0 && items.map((item,key)=>(
                    <TouchableOpacity key={item.id} onPress={() => sobreFilme(item.overview)} >
                        <ImageMovies key={items.id} source={{uri: `https://image.tmdb.org/t/p/w300${item.poster_path}`}}/>
                    </TouchableOpacity>
                ))}
            </ScrollMovies>
        </Movies>
            
        
       
    );
}
