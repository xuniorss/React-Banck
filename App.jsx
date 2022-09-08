import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [sex, setSex] = useState(0)
    const [sexContent, setSexContent] = useState(['Male', 'Female'])
    const [limit, setLimit] = useState(250)
    const [student, setStudent] = useState(false)

    const handleSend = () => {
        if(name === '' || age === 0) {
            alert('Fill in all fields')
            return
        }
        alert(
            'Account opened successfully \n\n' +
            'Name: '+name+ '\n' +
            'Age: '+age+ '\n' +
            'Sex: '+sexContent[sex]+ '\n' +
            'Limit: '+limit.toFixed(2)+ '\n' +
            'Student: '+student
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textLogo}>React Banck</Text>
            <Text style={styles.textSubLogo}>Create an account</Text>

            <View style={styles.content}>
                <Text style={styles.textContent}>Name</Text>
                <TextInput placeholder='Type your name' value={name} onChangeText={setName} />

                <Text style={styles.textContent}>Age</Text>
                <TextInput keyboardType='numeric' placeholder='Type your age' value={age} onChangeText={setAge} />

                <Text style={styles.textContent}>Sex</Text>
                <Picker
                    selectedValue={sex}
                    onValueChange={(value, index) => setSex(value)}
                >
                    {sexContent.map((val, index) => {
                        return <Picker.Item key={index} value={index} label={val} />
                    })}
                </Picker>
                
                <Text style={styles.textContent}>Limit</Text>
                <Slider 
                    minimumTrackTintColor='#CF0000'
                    minimumValue={250}
                    maximumValue={4000}
                    value={limit}
                    onValueChange={(limit) => setLimit(limit)}
                />

                <Text style={styles.textContent}>Student</Text>
                <Switch 
                    trackColor={'#00C300'}
                    value={student}
                    onValueChange={(studentValue) => setStudent(studentValue)}
                />

                
                <View style={styles.btn}>
                    <TouchableOpacity onPress={handleSend} style={styles.button}>
                        <Text style={styles.btnText}>Create</Text>
                    </TouchableOpacity>
                </View>
                
            </View>

            <View style={styles.container}>
                <Text style={styles.textLogo}>Summary</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.content}>
                        <Text>{name.length > 0 ? `Your name: ${name}` : ''}</Text>
                        <Text>{age.length > 0 ? `Your age: ${age}` : ''}</Text>
                        <Text>{sexContent.length > 0 ? `Your sex: ${sexContent[sex]}` : ''}</Text>
                        <Text>{limit ? `Your limit: ${limit.toFixed(2)}` : ''}</Text>
                        <Text>{student ? 'You are student' : ''}</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    textLogo: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 20
    },
    textSubLogo: {
        textAlign: 'center',
        fontSize: 15
    },
    content: {
        padding: 15,
    },
    textContent: {
        color: 'red'
    },
    btn: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'red',
        width: 150,
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#FFF'
    }
})