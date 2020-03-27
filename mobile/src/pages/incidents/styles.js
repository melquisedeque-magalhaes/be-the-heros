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
        alignItems: 'center'
    },

    headerText:{
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold:{
        fontWeight: 'bold'
    },

    title:{
        fontSize: 30,
        paddingBottom: 16,
        paddingTop: 48,
        color: '#13131A',
        fontWeight: 'bold'
    },

    description:{
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },

    incidentList:{
        paddingTop: 32
    },

    Incident:{
        borderRadius: 8,
        color: '#FFF',
        padding: 24,
        marginBottom: 16,
    },

    IncidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    IncidentValue:{
        paddingTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#717180'
    },

    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText:{
        color: '#E04141',
        fontWeight: 'bold',
        fontSize: 15
    }
})