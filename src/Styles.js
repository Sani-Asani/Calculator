import {StyleSheet} from "react-native";

const styles = StyleSheet.create({



    LightButton:{
      position: 'absolute',
      top:3,
      right:7,
      backgroundColor:"#000000",
      padding:5,
      margin:8,
    },
    LightButtonLight:{
      position: 'absolute',
      top:-90,
      right:90,
      backgroundColor:"#ffffff",
      borderRadius:100,
      padding:5,
      margin:8,


    }, DarkButton:{
      position: 'absolute',
      top:-90,
      right:80,
      backgroundColor:"#000000",
      borderRadius:100,
      padding:6,
      margin:8,

    },
    DarkButtonLight:{
        position: 'absolute',
        top:3,
        right:7,
        backgroundColor:"#ffffff",
        borderRadius:100,
        padding:6,
        margin:8,


    },


    LightText:{
        color:"#fff"
    },
    LightTextResultsHistory:{
        color:"#000000",
        marginTop: 12,
        marginLeft: 8
    },TextResultsHistory:{
        color:"#fff",
        marginTop: 12,
        marginLeft: 8
    },
    OutputView: {
        backgroundColor: '#000000', flex: 4, borderBottomWidth: 1, borderBottomColor: "#fff"
    }, OutputViewLight: {
        backgroundColor: '#ffffff', flex: 4, borderBottomWidth: 1, borderBottomColor: "#000000"
    }, OutputView1: {
        backgroundColor: '#000000', flex: 2 / 3, marginTop: 30,
    },
    OutputView1Light: {
        backgroundColor: '#ffffff', flex: 2 / 3, marginTop: 30,
    }, container: {
        flex: 1,
    }, InputViewDark: {
        flex: 7, backgroundColor: "#000000",
    },
        InputView_Light: {
            flex: 7, backgroundColor: "#ffffff",

    }, NumButtons: {
        alignItems: "center",
        justifyContent: 'center',
        color: '#fff',
        fontSize: 30,
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor: "#313030",
        padding: 20,
        paddingLeft: 32,

        width: 80,
        height: 80,


    }, NumButtonsLight: {
        alignItems: "center",
        justifyContent: 'center',
        color: '#000000',
        fontSize: 30,
        borderRadius: 100,
        backgroundColor: "#e1e1e1",
        padding: 20,
        paddingLeft: 32,
        width: 80,
        height: 80,


    }, ArithmeticButtonsGray: {
        alignItems: "center",
        justifyContent: 'center',
        color: '#000000',
        fontSize: 30,
        borderRadius: 100,
        backgroundColor: "#9f9f9f",
        padding: 20,
        paddingLeft: 32,

        width: 80,
        height: 80,


    }, ArithmeticButtonsGrayLight: {
        alignItems: "center",
        justifyContent: 'center',
        color: '#ffffff',
        fontSize: 30,
        borderRadius: 100,
        backgroundColor: "#5d5d5d",
        padding: 20,
        paddingLeft: 32,

        width: 80,
        height: 80,


    }, ArithmeticButtonsGrayPM: {
        alignItems: "center",
        justifyContent: 'center',
        color: '#000000',
        fontSize: 30,

        borderRadius: 100,
        backgroundColor: "#9f9f9f",
        padding: 16,
        paddingTop: 20,


        width: 80,
        height: 80,


    }, ArithmeticButtonsGrayPMLight: {
        alignItems: "center",
        justifyContent: 'center',
        color: '#fff',
        fontSize: 30,

        borderRadius: 100,
        backgroundColor: "#5d5d5d",
        padding: 16,
        paddingTop: 20,


        width: 80,
        height: 80,


    }, NumButtonsDot: {
        alignItems: "center",
        justifyContent: 'center',
        color: '#fff',
        fontSize: 30,
        borderRadius: 100,
        backgroundColor: "#313030",
        padding: 15,
        paddingLeft: 30,


        width: 80,
        height: 80,


    }, NumButtonsDotLight: {
        alignItems: "center",
        justifyContent: 'center',
        color: '#000000',
        fontSize: 30,
        borderRadius: 100,
        backgroundColor: "#e1e1e1",
        padding: 15,
        paddingLeft: 30,


        width: 80,
        height: 80,


    }, NumButtons0: {
        alignItems: "center",
        justifyContent: 'center',
        color: '#fff',
        fontSize: 30,
        borderRadius: 100,
        backgroundColor: "#313030",
        padding: 25,
        paddingLeft: 30,
        marginRight: -24,
        width: 180,
        height: 80,


    }, NumButtons0Light: {
        alignItems: "center",
        justifyContent: 'center',
        color: '#000000',
        fontSize: 30,
        borderRadius: 100,
        backgroundColor: "#e1e1e1",
        padding: 25,
        paddingLeft: 30,
        marginRight: -24,
        width: 180,
        height: 80,


    },


    Rows: {
        flexDirection: "row",
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 5,



    }, outputNum: {
        position: "absolute", bottom: 5, right: 5, fontSize: 45, color: "#fff",
    }, outputNumLight: {
        position: "absolute", bottom: 5, right: 5, fontSize: 45, color: "#000000",
    },


    outputNumRes: {
        position: "absolute", bottom: 2, right: 5, fontSize: 60, fontWeight: '500',

    }, outputNumRes1: {
        fontSize: 18,
        fontWeight: '100',
        opacity: 0.7,
        color: "#ffffff",
        marginLeft: 10,
        letterSpacing: 2,
        textDecorationLine: "underline",


    },outputNumRes1Light: {
        fontSize: 18,
        fontWeight: '100',
        opacity: 0.7,
        color: "#000000",
        marginLeft: 10,
        letterSpacing: 2,
        textDecorationLine: "underline",


    },

    ScrollView: {
        flex: 1, backgroundColor: "#000000",
    }, ScrollViewLight: {
        flex: 1, backgroundColor: "#ffffff",
    },


    ClearButton: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#b69515",
        fontSize: 30,
        borderWidth: 1,
        borderRadius: 100,
        padding: 20,
        width: 80,
        height: 80,
    },
    ArithmeticButtons: {
        color:"#000000",
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#b69515",
        fontSize: 30,

        borderRadius: 100,

        padding: 20,
        paddingLeft: 32,
        width: 80,
        height: 80,
    },
ArithmeticButtonsLight: {
        color:"#ffffff",
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#b69515",
        fontSize: 30,

        borderRadius: 100,

        padding: 20,
        paddingLeft: 32,
        width: 80,
        height: 80,
    },

})
export default styles;
