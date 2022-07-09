import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const checkpassword = () => {
    setCheckPassword(password.length<6)
  }
  const checkemail = () => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (email.match(validRegex)){
      setCheckEmail(false)
    }
    else setCheckEmail(true)
  }
  return (
      <LinearGradient style={styles.container} colors={["#FBFBFB", "#588CDA"]}>
        <View style={styles.box}>
          <Text style={styles.textHeader}>Login</Text>
          <Image
            source={require("../../assets/Login.png")}
            style={styles.img}
          />
            <View style={styles.boxInput}>
              <TextInput
               placeholder="Enter username..." 
               style={styles.input}
               onChangeText={(value) => {
                setEmail(value)
                console.log(email)
                
               }}
               onBlur = {() => {checkemail()}}
                />
              {
                checkEmail ?
                <Text style={{color: 'red'}}>This field must be email</Text>
                :null
              }
              <TextInput 
               secureTextEntry={true}
               placeholder="Enter password..."
               style={styles.input}
               onChangeText={(value) => {
                  setPassword(value)
                  console.log(password)
                  }}
                onBlur = {() => {checkpassword()}}
                  />
               {
                checkPassword ?
                <Text style={{color: 'red'}}>Length of password limit is 6</Text>
                :null
               }
            </View>
            <TouchableOpacity style={{ marginTop: 30, width: "60%" }} >
              <Text style={styles.btn}>Login</Text>
            </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
          </View>
          
        </View>
      </LinearGradient>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  boxSocial: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconSocial: {
    width: 50,
    height: 50,
    margin: 20,
    marginTop: 5,
  },
  prevBtn: {
    position: "absolute",
    top: "5%",
    left: "2.5%",
  },
  box: {
    marginTop: "10%",
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
  },
  textHeader: {
    fontSize: 30,
    right: "30%",
    top: "5%",
    zIndex: 1,
    fontWeight: "400",
  },
  img: {
    width: "80%",
    height: "40%",
  },
  boxInput: {
    width: "80%",
  },
  input: {
    borderWidth: 2,
    borderColor: "#000",
    minWidth: 270,
    textAlignVertical: "center",
    padding: 10,
    paddingLeft: 20,
    borderRadius: 20,
    marginTop: 20,
    shadowColor: "#000",
  },
  btn: {
    backgroundColor: "#00B0FF",
    padding: 10,
    fontSize: 15,
    color: "#000",
    borderRadius: 20,
    textAlign: "center",
  },
});