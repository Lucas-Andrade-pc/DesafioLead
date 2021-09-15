import React, { useEffect, useState, useReducer } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView,StatusBar, ScrollView } from 'react-native';
import tmdb,{searchMovies} from '../services/tmdb';
import Dashboard from './pages/Dashboard/Dashboard';
import {Icon} from 'react-native-elements'
import {Container,
        Input, 
        ButtonInput,
        ContainerInput } from './styles';

import {useDispatch, useSelector} from 'react-redux'
import { getMovie,getSearchMovie } from '../redux/action/ListMovie';
import {getDown,getUp} from '../redux/action/count'

export default function Main() {
  
  const count = useSelector(state => state.ReducerFonts.count)
  
  const movies = useSelector(state => state.ReducerMovies.movies)
  console.log(" -> ",movies)
  const dispatchMovies = useDispatch();
  const dispatchFonts = useDispatch();
  const dispatchSearch = useDispatch();
  const [movieList, setMovieList] = useState([])
  const [searchMovies, setSearchMovies] = useState('')
  const [filmes, setFilmes] = useState([])

  useEffect (() =>{
    dispatchMovies(getMovie())
  },[])
  
  function up(){
    dispatchFonts(getUp())
  }
  function down(){
    dispatchFonts(getDown())
  }
  
  function buscar () {  
    //dispatchSearch(getSearchMovie())
  }

  return (
    <ScrollView>
      <Container>
        <ContainerInput>
          <Input 
            placeholder=" Procurar filme"
            placeholderTextColor="#fff"
            value={searchMovies}
            onChangeText={setSearchMovies}
          />
          <ButtonInput onPress={() => buscar()}>
            <Icon name="search" color="#fff" />
          </ButtonInput>
          <ButtonInput onPress={() => up()}>
            <Text style={{color: '#fff', fontSize: 20}}> A+ </Text>
          </ButtonInput>
          <ButtonInput onPress={() => down()}>
            <Text style={{color: '#fff', fontSize: 20}}> A- </Text>
          </ButtonInput>
          </ContainerInput>
          
            {movies.map((item, key) => (
              <Dashboard key={key} title="Original" items={item} count={count} />
            ))}  
          <StatusBar backgroundColor="#000"/>
      </Container>
    </ScrollView>
  );
}