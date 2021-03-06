import React, { Component } from 'react';
import {   StyleSheet,ActivityIndicator,StatusBar,ScrollView } from 'react-native';
import firebase from 'firebase';
import {  ThemeProvider,SocialIcon ,Image, Header,ButtonGroup} from 'react-native-elements';
import { Button,Container,Icon, Text,View,Item, Input, Footer,DatePicker,Picker } from 'native-base';
import { LinearGradient } from 'expo'
import { grey } from 'ansi-colors';



class DashboardScreen extends Component {

  constructor(props) {

    super(props)
      this.state={user:'',selectedIndex: 2,selected: 'key0'}
      this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }


  onValueChange(value) {
    this.setState({
      selected: value
    });
  }


  componentDidMount(){

    var user = firebase.auth().currentUser;
    this.setState({
      user:user
    })
    var name, email, photoUrl, uid, emailVerified;
    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                       // this value to authenticate with your backend server, if
                       // you have one. Use User.getToken() instead.
            console.log("123")
           console.log(user)            
    }
  }

  render() {
    const buttons = ['Male', 'Female']
    const { selectedIndex } = this.state
    return (
      
     
      <Container>
      <Container>
      <StatusBar barStyle = "dark-content" hidden = {false}  translucent = {true}/>

          <View 
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",}}
                  >
                  <Image
                      source={ require('../assets/allstarsred.png') }
                      style={{margin:20,
                                          height:37,width:37 }}
                    />
                  {/* <Icon
                      name='md-arrow-round-back' 
                      style={{
                        fontSize:14,
                        marginTop:34,
                        marginLeft:17}}
                      /> */}
                  <Image
                      source={ require('../assets/img_bg_header.png') }
                      style={{alignSelf: 'flex-end' }}
                    />  
          </View>
            {/* <Header
              placement="left"
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'Dashboard Screen', style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
            />
              <Container style={styles.container}>
                  <Text style={{textAlign:"center"}}>
                      {this.state.user.displayName}
                  </Text> 
                  <Image
                    source={{ uri: this.state.user.photoURL}}
                    style={{ width: 200, height: 200}}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                  <Button 
                      title="Sign out" 
                      onPress={() => firebase.auth().signOut()} />
              </Container> */}
             
        <ScrollView 
              behaviour = "height"
              keyboardVerticalOffset = {64}
              style= {{  flex: 1,}}>
          <View
          style={{marginBottom:'5%'}}
          >
                 <Text 
                  style={{
                    color:'#9c9c9c',
                    marginTop:20,
                    marginLeft:20,
                    fontSize:13}}>
                   1 of 2
                 </Text>
                 <Text 
                      style={{fontSize:14,
                              fontWeight:'bold',
                              marginStart:20,
                              marginTop:5}}>
                      Personal Information
                 </Text>
                 <Text style={{fontSize:12,
                              marginStart:20,
                              marginTop:5}}>
                      Thank you for join Allstar! We’ll need some of your information to create an account for you.
                 </Text>

                 <Text style={{fontSize:13,
                              marginStart:20,
                              marginTop:15}}>
                   Full Name
                 </Text>
                  <Item 
                        rounded 
                        style={{
                          backgroundColor:'#F0F0F0',
                          borderColor:'#F0F0F0',
                          marginStart:20,
                          marginEnd:20,
                          marginTop:10,
                          height:40}}>

                          <Input 
                            style={{marginLeft:20,
                                    fontSize:12}}
                            placeholder='Type your full name here'/>
                  </Item>

                  <Text style={{fontSize:13,
                              marginStart:20,
                              marginTop:15}}>
                   Birtday
                 </Text>
                  <Item 
                        rounded 
                        style={{
                          backgroundColor:'#F0F0F0',
                          borderColor:'#F0F0F0',
                          marginStart:20,
                          marginEnd:20,
                          marginTop:10,
                          height:40}}>

                          <DatePicker
                            style={{marginLeft:20,
                                    fontSize:12}}
                            defaultDate={new Date(2018, 4, 4)}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2018, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="DD/MM/YYYY"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            disabled={false}
                            />
                  </Item>

                  <Text style={{fontSize:13,
                              marginStart:20,
                              marginTop:15}}>
                   Gender
                 </Text>
                 
                
                <ButtonGroup
                      onPress={this.updateIndex}
                      selectedIndex={selectedIndex}
                      buttons={buttons}
                      containerStyle={{borderRadius:40,height: 40,marginLeft:20,marginRight:20}}
                      />
                
                {/* <Text style={{fontSize:13,
                              marginStart:20,
                              marginTop:15}}>
                   Phone Number
                 </Text>
                  <Item 
                        rounded 
                        style={{
                          backgroundColor:'#F0F0F0',
                          borderColor:'#F0F0F0',
                          marginStart:20,
                          marginEnd:20,
                          marginTop:10,
                          height:40}}>

                          <Input 
                            style={{
                                    marginLeft:20,
                                    fontSize:12}}
                            placeholder='eg.  0812xxxxxxxx'/>
                  </Item>
                  
                  <Text style={{fontSize:13,
                              marginStart:20,
                              marginTop:15}}>
                   Email
                 </Text>
                  <Item 
                        rounded 
                        style={{
                          backgroundColor:'#F0F0F0',
                          borderColor:'#F0F0F0',
                          marginStart:20,
                          marginEnd:20,
                          marginTop:10,
                          height:40}}>

                          <Input 
                            style={{
                                    marginLeft:20,
                                    fontSize:12}}
                            placeholder='type your email here'/>
                  </Item> */}

                  <Text style={{fontSize:13,
                              marginStart:20,
                              marginTop:15}}>
                   Location
                 </Text>
                  <Item 
                        rounded 
                        style={{
                          backgroundColor:'#F0F0F0',
                          borderColor:'#F0F0F0',
                          marginStart:20,
                          marginEnd:20,
                          marginTop:10,
                          height:40}}>

                      <Picker
                        mode="dropdown"
                        iosHeader="Select City"
                        // iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined }}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                      >
                        <Picker.Item label="Select a city" value="key0" />
                        <Picker.Item label="Jakarta" value="key1" />
                        <Picker.Item label="Surabaya" value="key2" />
                        <Picker.Item label="Malang" value="key3" />
                        <Picker.Item label="Jombang" value="key4" />
                        <Picker.Item label="Bandung" value="key5" />
                      </Picker>
                  </Item>


                  <Text style={{fontSize:13,
                              marginStart:20,
                              marginTop:15,
                              marginBottom:15}}>
                   Influencer Category
                 </Text>
                  
                  <View style={styles.container2}>
                      <View style={styles.buttonContainer}>
                      <Button rounded light>
                          <Text style={{color:'gray'}}>Beauty</Text>
                      </Button>
                      </View>
                      <View style={styles.buttonContainer}>
                      <Button rounded light>
                          <Text style={{color:'gray'}}>Healt/Sport</Text>
                      </Button>
                      </View>
                      <View style={styles.buttonContainer}>
                      <Button rounded light>
                          <Text style={{color:'gray'}}>Fasion</Text>
                      </Button>
                      </View>
                  </View>

                  <View style={styles.container2}>
                      <View style={styles.buttonContainer}>
                      <Button rounded light>
                          <Text style={{color:'gray'}}>Entertainment (music & film)</Text>
                      </Button>
                      </View>
                      <View style={styles.buttonContainer}>
                      <Button rounded light>
                          <Text style={{color:'gray'}}>Fasion</Text>
                      </Button>
                      </View>
                  </View>

                  <View style={styles.container2}>
                      <View style={styles.buttonContainer}>
                      <Button rounded light>
                          <Text style={{color:'gray'}}>Technology</Text>
                      </Button>
                      </View>
                      <View style={styles.buttonContainer}>
                      <Button rounded light>
                          <Text style={{color:'gray'}}>Food & Baverage</Text>
                      </Button>
                      </View>
                  </View>

                  <View style={styles.container2}>
                      <View style={styles.buttonContainer}>
                      <Button rounded light>
                          <Text style={{color:'gray'}}>Family & Parenting</Text>
                      </Button>
                      </View>
                      <View style={styles.buttonContainer}>
                      <Button rounded light>
                          <Text style={{color:'gray'}}>Travel & Lifestyle</Text>
                      </Button>
                      </View>
                  </View>


                  <Text style={{fontSize:13,
                              marginStart:20,
                              marginTop:15}}>
                   Referal Code <Text style={{fontSize:13,
                              marginStart:20,
                              marginTop:15,
                              color:'gray'}}>(Optional)</Text>
                 </Text>
                 <Item 
                        rounded 
                        style={{
                          backgroundColor:'#F0F0F0',
                          borderColor:'#F0F0F0',
                          marginStart:20,
                          marginEnd:20,
                          marginTop:10,
                          height:40,
                          marginBottom:20
                          }}>

                          <Input 
                            style={{marginLeft:20,
                                    fontSize:12}}
                            placeholder='input your referal code here'/>
                  </Item>

                  
                  


          </View>
          </ScrollView>
          </Container>
          
          
      <Footer>
      <LinearGradient
        onPress= {() => this.props.navigation.navigate('CheckEmailPage')}
        colors={['#FF786F', '#FF0B52']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}    
        style={styles.text}>

        <Text 
        onPress= {() => this.props.navigation.navigate('RegisterPage2')}
        style={{color:'white', fontSize:14}}>Next</Text>
        <Icon 
        onPress= {() => this.props.navigation.navigate('RegisterPage2')}
        style={{color:'white', marginStart: 10, fontSize:14}} name='md-arrow-round-forward'/>
      </LinearGradient>
      </Footer>
      </Container>
    );
  }
}
export default DashboardScreen;

const styles = StyleSheet.create({
  text: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    margin:10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
    container2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        marginLeft:15,
        marginRight:15
    },
    buttonContainer: {
        flex: 0,
        margin:5
    }

});

