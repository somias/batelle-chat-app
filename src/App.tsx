import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageBackground,
  StatusBar,
} from 'react-native';

import ChatMessageItem from './components/ChatMessageItem';
import ChatInput from './components/ChatInput';

import useMessageApi from './hooks/useMessageApi';

import { Images } from '~/assets';
import LoadingSpinner from './components/LoadingSpinner';

const randomImage = 'https://picsum.photos/200/300';

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { getMessages, messages, setMessages, error, loading } =
    useMessageApi();

  const flatListRef = useRef<FlatList>(null);

  React.useEffect(() => {
    getMessages();
  }, [getMessages]);

  const handleSendMessage = (message: string) => {
    if (!message.length) {
      return;
    }

    const messageObject = {
      id: '99',
      avatar: randomImage,
      body: message,
      createdAt: new Date().toISOString(),
      user: 'e502f3e0-1a46-49be-abb1-3c4cc23689c5',
      username: 'Milos.Savkovic',
    };

    setMessages([...messages, messageObject]);
  };

  return (
    <ImageBackground
      source={Images.chatBackground}
      style={styles.ImageBackground}
      resizeMode="cover">
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.container}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <FlatList
              data={messages}
              renderItem={({ item }) => <ChatMessageItem item={item} />}
              ref={flatListRef}
              onContentSizeChange={() =>
                flatListRef.current?.scrollToEnd({ animated: true })
              }
            />
            <ChatInput handleSendMessage={handleSendMessage} />
          </>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    flex: 1,
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
