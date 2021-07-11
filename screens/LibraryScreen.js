import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, Button, ScrollView, StyleSheet, StatusBar } from 'react-native'
import { Avatar, ListItem, SocialIcon, Switch } from 'react-native-elements';
import axios from 'axios';
import { SearchBar } from 'react-native-elements';

export default function LibraryScreen({navigation}) {
const [booksFiltered,setBooksFiltered] = useState([]);
const [bookSearch,setBookSearch] = useState("")
const [ApiKey, setApiKey] = useState("AIzaSyCPY54wnj04oxvbApDSTx_kSi4itDvO_mw")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    
  }
});

function searchBook(){
  
axios.get("https://www.googleapis.com/books/v1/volumes?q="+bookSearch+"&key="+ApiKey)
.then(res => {
  console.log(res.data.items);
  setBooksFiltered(res.data.items);
})


}

/*const booksFilteredJSX = booksFiltered.map(book => {
  return <Text><AntDesign name="book" size={24} color="black" /> {book.name}  {book.content}
   </Text>
<TextInput style={styles.input} value={bookSearch}
         onChangeText={(text) => {setBookSearch(text)}}  />
}) */
    

return (
    <ScrollView>
     <View style={styles.container}>
      <Text>Ma bibliothéque</Text>
      <FlatList
      data={booksFiltered}
      renderItem={({item})=> (
            <ListItem bottomDivider onPress={() => navigation.navigate('Book',{
				book: item
			})}>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{item.volumeInfo.title}</ListItem.Title>
              <ListItem.Subtitle> {item.volumeInfo.authors} </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
            </ListItem>)
          }
  
          keyExtractor={item => item.id.toString()}
        />
      <View style={styles.formulaire}>
        
          <SearchBar
        placeholder="Tu cherches un livre ? J'ai ce qu'il te faut "
        onChangeText={(text) => {setBookSearch(text)}}
        value={bookSearch} 
      />
        <Button title="OK" color="black" onPress={searchBook}/>
        
      
       
        
      </View>
       
      <StatusBar style="auto" />
     </View>
    </ScrollView>
    
  );
  
}