import React from 'react';
import { View, StyleSheet, Keyboard, Button, TextInput } from 'react-native';

class Compose extends React.Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
	}

	//Membuat state text 
	state = {
		text: ''
	}

	//submit method yang berfungsi ketika tombol ditekan
	submit() {
		//mengirim nilai ke database berdasarkan state text yang diterima
		this.props.submit(this.state.text);
		//mengatur state text menjadi kosong
		this.setState({
			text: ''
		})
		//menutup keyboard
		Keyboard.dismiss();
	}

	render(){
		return (
			<View style={styles.compose}>
				<TextInput
					style={styles.composeText}
					value={this.state.text}
					onChangeText={(text) => this.setState({text})}
					onSubmitEditing={(event) => this.submit()}
					editable = {true}
					maxLength = {40}
				/>
				<Button
					onPress={this.submit}
					title="Send"
				/>
			</View>
		)
	}
} 

const styles = StyleSheet.create({
  composeText: {
    width: '80%',
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  compose: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10
  }
});

export default Compose;