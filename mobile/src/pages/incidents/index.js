import React,{ useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo.png'

import api from '../../services/api'

import styles from './styles'

export default function Incidents(){

    const [incidents, setIncidents] = useState([])
    const [total, setTotal] = useState(0)

    const [pages, setPages] = useState(1)
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    function navigateToDetail(incident){
        navigation.navigate('Detail',{ incident })
    }

    async function loadIncidents(){
        if(loading){
            return
        }

        if(total > 0 && incidents.length === total){
            return
        }

        setLoading(true)

        const response = await api.get('incidents',{
            params: { pages }
        })

        setIncidents([...incidents, ...response.data])
        setTotal(response.headers['x-total-count'])
        setPages(pages + 1)
        setLoading(false)
    }

    useEffect(() => {
        loadIncidents()
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de<Text style={styles.headerTextBold}> {total} casos</Text>
                </Text>
            </View>
            
            <Text style={styles.title}>Bem Vindo!</Text>
            <Text style={styles.description}>Escolha um dos caso abaixo e salve o dia!</Text>
        
            <FlatList 
                data={incidents}
                style={styles.IncidentList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false} 
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={( { item:incident }) => (
                    <View style={styles.Incident}>

                        <Text style={styles.IncidentProperty}>ONG:</Text>
                        <Text style={styles.IncidentValue}>{incident.name}</Text>

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

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incident)}
                        >
                            <Text style={styles.detailsButtonText}>
                                Ver Mais Detalhes
                            </Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    )
}