import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import {  ThemeProvider,SocialIcon ,Image,Text} from 'react-native-elements';
import { Footer, Container,Header,Content, Button} from 'native-base';



class LoginScreen extends Component {
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };
  onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInAndRetrieveDataWithCredential(credential)
            .then(function(result) {
              console.log('user signed in ');
              if (result.additionalUserInfo.isNewUser) {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .set({
                    gmail: result.user.email,
                    profile_picture: result.additionalUserInfo.profile.picture,
                    first_name: result.additionalUserInfo.profile.given_name,
                    last_name: result.additionalUserInfo.profile.family_name,
                    created_at: Date.now()
                  })
                  .then(function(snapshot) {
                    // console.log('Snapshot', snapshot);
                  });
              } else {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .update({
                    last_logged_in: Date.now()
                  });
              }
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log('User already signed-in Firebase.');
        }
      }.bind(this)
    );
  };
  signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '506979177321-cjpridbn48fvhav56eaqsf7dfudlp1g8.apps.googleusercontent.com',
        behavior: 'web',
        iosClientId: '506979177321-j7aav6c5tlaqkcd4illvqpsqo4jlhn9e.apps.googleusercontent.com', //enter ios client id
        scopes: ['profile', 'email']
      });

      if (result.type === 'success') {
        this.onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
  render() {
    return (
      //
      <Container>
        <Image
            source={ require('../assets/top.png') }
            style={{ width: '100%', height: 200 }}
          />
        {/* <Header /> */}
        <Container style={styles.container}>

        <Text 
            style={{
              marginLeft:10,
              fontSize:20,
              marginBottom:10}}>
            Selamat Datang Influencer!
        </Text>
        <Text 
            style={{
              fontSize:13,
              // fontWeight:'bold',
              marginLeft:10,
              marginBottom:30}}>
            Allstars Influencer dashboard membuka kesempatan untuk mendapatkan uang tambahan dari iklan. Ayo gabung sekarang!
        </Text>


        <Button block light 
                style={{
                  marginTop:10,
                  marginBottom:10,
                  borderRadius: 100,
      backgroundColor: '#FA285A',
                }}
                onPress={() => this.props.navigation.navigate("EmailpassScreen")}>
            <Text>Daftar</Text>
          </Button>

          <Button block light
                  style={{
                  marginBottom:10,
                  borderRadius: 100,
                }}
                onPress={() => this.props.navigation.navigate("Login")}>
                
            <Text>Login</Text>
          </Button>

        {/* <SocialIcon
                title="Sign In With Instagram"
                button
                raised={false}
                type='instagram'
                // onPress={() => this.signInWithGoogleAsync()}
                
          />
          <SocialIcon
                title="Sign In With Facebook"
                button
                raised={false}
                type='facebook'
                // onPress={() => this.signInWithGoogleAsync()}
                
          />
          <SocialIcon
                title="Sign In With Twitter"
                button
                raised={false}
                type='twitter'
                // onPress={() => this.signInWithGoogleAsync()}
                
          />
        <SocialIcon
                title="Sign In With Google"
                button
                raised={false}
                type='google-plus-official'
                onPress={() => this.signInWithGoogleAsync()}
                
          /> */}
          <Text style={{
                  textAlign:'center',
                  margin:10,
                  }}>
            Ada yang ingin ditanyakan? <Text style={{
                  textAlign:'center',
                  margin:10,
                  color:'#FA285A'
                  }}>
                  Baca FAQ
          </Text>
          </Text>
        
          
        </Container>
        
          
          </Container>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:35,
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});



const colored = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  setFontSize: {
    fontSize: 20,
    fontWeight : 'bold' 
  },
  setColorRed : {
    color: '#f44336'
  },
  setColorPink :{
    color: '#e91e63'
  },
  setColorPurple :{
    color: '#9c27b0'
  },
  setColorBlue :{
    color: '#2196f3'
  },
});
