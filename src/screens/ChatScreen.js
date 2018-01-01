import React from 'react';
import { getMessages, postMessage } from '../services/api';
import { ImageBackground, StyleSheet, FlatList } from 'react-native';
import Message from '../components/Message';
import Compose from '../components/Compose';

export default class ChatScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.name}`
    })

    state = {
        messages: []
    }

    componentDidMount() {
        this.unsubscribeGetMessages = getMessages((snapshot) => {
            this.setState({
                messages: Object.values(snapshot.val())
            })
        })
    }
    componentWillUnmount() {
        this.unsubscribeGetMessages();
    }


    render() {
        return (
            <ImageBackground
				style={[ styles.container, styles.backgroundImage ]}
				source={require('../assets/img/background.png')}>
				<FlatList
					style={styles.container}
					data={this.state.messages}
					renderItem={Message}
					keyExtractor={(item, index) => (`message-${index}`)}
				/>
				<Compose submit={postMessage} />
			</ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    listItem: {
        width: '70%',
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderColor: '#979797',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10
    },
    incomingMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#E1FFC7'
    } 
})