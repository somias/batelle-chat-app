import React from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Icons } from '~/assets';

import styles from './styles';

const ChatInput = (props: any) => {
  const { handleSendMessage } = props;

  const [message, setMessage] = React.useState('');

  const handleInput = (text: string) => setMessage(text);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={5}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Send a message"
          placeholderTextColor="#9FA0A2"
          onChangeText={handleInput}
        />
        <TouchableOpacity onPress={() => handleSendMessage(message)}>
          <Image source={Icons.sendIcon} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatInput;
