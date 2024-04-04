import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image, TextInput, Pressable, StyleSheet } from 'react-native';


export default function App() {
  return (
    <ImageBackground source={require ('/assets/fundo.jpg')} style={styles.container}>
      <Image source={require ('/assets/Instagram.png')} style={styles.insta} />
      <StatusBar style="auto" />
      <View style= {styles.ct}>
        <TextInput style= {styles.forms} 
          placeholder='    Username' 
          placeholderTextColor={'#ffffffb9'}
        />
         <TextInput style= {styles.forms} 
          placeholder='   Password'
          placeholderTextColor={'#ffffffb9'}
          keyboardType='pasword'
          secureTextEntry
        />
       </View>
        <Pressable style= {styles.botao}><Text style={styles.login}>Login</Text></Pressable>
        <View style={styles.link} >
        <Pressable><Text style={styles.forgot}>Forgot your login details?</Text></Pressable>
        <Pressable><Text style={styles.help}> Get help signing in.</Text></Pressable>
        </View>

        <View style={styles.footer}>
          <View style={ styles.linha} ></View>
          <Text style={styles.or}>OR</Text>
          <View style={ styles.linhadois}></View>
        </View>

      </ImageBackground>
  );
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    insta: {
      marginTop: 110,
      height: 120,
      width: 220,
  
    },
    ct: {
      marginTop: -40,
    },
    forms:{
      backgroundColor: '#ffffff3b',
      height: 50,
      width: 330,
      marginTop: 20,
      borderRadius: 7,
      fontSize: 15,
      fontWeight: '300',
    },
    botao: {
      height: 50,
      width: 330,
      marginTop: 20,
      borderRadius: 7,
      borderWidth: 2,
      borderColor: '#ffffff3b',
      alignItems: 'center',
    },
    login: {
      fontSize: 19,
      marginTop: 10,
      color: '#ffffff3b',
      fontWeight: '300',
    },
    link: {
      marginTop: 15,
      flexDirection: 'row'
    },
    forgot: {
      color: '#ffffffd5',
      fontWeight: '300',
    },
    help: {
      color: '#ffffffd5',
      fontWeight: '600',
    },
  
    footer:{
      flexDirection: 'row'
    },
  
    linha: {
      marginTop: 220,
      height: 1,
      width: 130,
      marginLeft: -150,
      backgroundColor: '#ffffff3b',
    },
    or: {
      color: '#ffffff3b',
      fontWeight: '400',
      marginTop: 210,
      marginRight: 10,
      marginLeft: 10,
    },
  
    linhadois: {
      marginTop: 220,
      height: 1,
      width: 130,
      marginRight: -500,
      backgroundColor: '#ffffff3b'
    },
  });
  