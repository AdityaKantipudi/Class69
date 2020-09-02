import React from "react";
import{Text,View,TouchableOpacity,StyleSheet} from "react-native";
import * as Permissions from "expo-permissions";
import {BarcodeScanner} from "expo-barcode-scanner";


export default class TransactionScreen extends React.Component{
    constructor() {
    super();    
    this.state={
        hasCameraPermissions:null,
        scanned:false,
        scannedData:""
    }
    }
    getCameraPermissions = async() => {
        const {status}=await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions:status === "granted",

        })
    }
render() {
    const hasCameraPermissions = this.state.hasCameraPermissions;
    return(
        <View style = {styles.container}>
            <Text style = {styles.displayText}>{
                hasCameraPermissions === true?this.state.scannedData:"Request Camera Permissions"
                
            }</Text>
            <TouchableOpacity 
            OnPress = {this.getCameraPermissions}
            style = {styles.ScanButton}>
                <Text>Scan QR Code</Text>
                </TouchableOpacity>
        </View>
    )
}
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    displayText:{
        fontSize:15,
        textDecorationLine:"underline",
    },
    ScanButton:{
        backgroundColor:"Red",
        padding:10,
        margin:10,
    }

})