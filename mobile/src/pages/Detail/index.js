import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import  * as MailComposer  from 'expo-mail-composer'

import styles from './styles'
import logoImg from '../../assets/logo.png'

export default function Detail(){

    const route = useRoute()

    const navigation = useNavigation()

    const incident = route.params.incident

    const msg = `óla ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`

    function navigateBack(){
        navigation.goBack()
    }

    function sendEmail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients:[incident.email],
            body: msg
        })
    }

    function sendWhatts(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatts}?text=${msg}`)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.Incident}>

                <Text style={styles.IncidentProperty, { marginTop: 0}}>ONG:</Text>
                <Text style={styles.IncidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.IncidentProperty}>CASO:</Text>
                <Text style={styles.IncidentValue}>{incident.title}</Text>

                <Text style={styles.IncidentProperty}>VALOR:</Text>
                <Text 
                    style={styles.IncidentValue}>
                        {Intl.NumberFormat('pt-BR', 
                        { style: 'currency', 
                        currency: 'BRL' })
                        .format(incident.value)}
                </Text>

            </View>

            <View style={styles.contactBox}>

                <Text style={styles.heroTitle}>Salve o Dia!</Text>
                <Text style={styles.heroTitle}>Seja o Herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    
                    <TouchableOpacity style={styles.action} onPress={sendWhatts}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}