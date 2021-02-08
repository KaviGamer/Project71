import * as React from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'

export default class Write extends React.Component {

  constructor(){
    super();
    this.state={
      title:'',
      author:'',
      story:'',
    }
  }
  submitStory=()=>{
    this.setState({
      title:title,
      author:author,
      story:story,
    })
  }
    render(){
        return(
    <View>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Write A Story',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <TextInput
        value={title}
          style={{marginTop: 50,
            width: '80%',
            alignSelf: 'center',
            height: 40,
            textAlign: 'center',
            borderWidth: 4,
          }}
          placeholder="Title"
        />
        <TextInput
        value={author}
          style={{marginTop: 50,
            width: '80%',
            alignSelf: 'center',
            height: 40,
            textAlign: 'center',
            borderWidth: 4,}}
          placeholder="Author"
        />
        <TextInput
        value={story}
          style={{marginTop: 50,
            width: '80%',
            alignSelf: 'center',
            height: 40,
            textAlign: 'center',
            borderWidth: 4,}}
          multiline={true}
          placeholder="Write Story"
        />
        <TouchableOpacity style={styles.submitButton}
        onPress={this.submitStory}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
    </View>
        )
    }
}