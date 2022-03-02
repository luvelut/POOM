import {StyleSheet} from "react-native";
import {COLORS} from "../variables/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        marginTop: 20,
    },
    image: {
        position:'absolute',
        top : 0,
        height: 305,
        width: 768,
    },
    bas: {
        backgroundColor: COLORS.background,
        borderRadius : 20,
        alignItems : 'center',
        position: 'absolute',
        top: 290,
        left: 0,
        width: '100%',
        height: '50%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 35,
        marginTop: 35,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: COLORS.primary,
        width: '100%',
        padding: 15,
        borderRadius: 35,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonOutline: {
        backgroundColor: 'white',
        borderColor: COLORS.primary,
        borderWidth: 2,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
    },
    buttonOutlineText: {
        color: COLORS.primary,
        fontWeight: '700',
        fontSize: 20,
    },
    text: {
        marginTop: 10,
        fontWeight:'bold',
        color: COLORS.primary,
    },
    subtitle: {
        marginTop: 10,
        fontWeight:'bold',
        color: 'black',
        textAlign: 'center'
    }
})