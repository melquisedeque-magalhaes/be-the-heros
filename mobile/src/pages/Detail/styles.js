import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },

    Incident:{
        borderRadius: 8,
        color: '#FFF',
        padding: 24,
        marginTop: 15,
    },

    IncidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 15,
    },

    IncidentValue:{
        paddingTop: 8,
        fontSize: 15,
        color: '#717180'
    },

    contactBox:{
        borderRadius: 8,
        color: '#FFF',
        padding: 24,
        marginBottom: 16,
    },

    heroTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    heroDescription:{
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    actions:{
        marginTop: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    action:{
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    }

})