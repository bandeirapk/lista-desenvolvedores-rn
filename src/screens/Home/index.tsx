import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';

import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {
    const participants = ["Bandeira", "Jonas", "Raquel", "Bellda", "João", "José"];

    function handleParticipantAdd() {
        if (participants.includes("Bandeira")) {
            return Alert.alert("Participante existente", "Já existe um participante na lista com esse nome!")
        }
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remove o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado!", `Participante ${name}, removido com sucesso!`)
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
        console.log(`Você clicou em remover o participante: ${name}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Quinta, 17 de Novembro de 2022.
            </Text>
            <View style={styles.viewForm}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor='#6b6b6b'
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}                     // Dados a serem tratados obs: funciona parecido com o map esse data
                keyExtractor={item => item}             // Tratar os itens como únicos
                renderItem={({ item }) => (
                    <Participant
                        name={item}
                        key={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />

            {/* <ScrollView>
                {
                    participants.map((participant) => (
                        <Participant
                            name={participant}
                            key={participant}
                            onRemove={() => handleParticipantRemove(participant)}
                        />
                    ))
                }
            </ScrollView> */}

        </View>
    );
}

// <Participant name="Bandeira" onRemove={() => handleParticipantRemove("Bandeira")} />  Passar propriedades com uma função que precisa de parâmetros.

