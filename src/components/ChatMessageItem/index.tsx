import React from 'react';
import { View, Text, Image } from 'react-native';

import moment from 'moment';

import styles from './styles';

interface Item {
  avatar: string;
  username: string;
  createdAt: string;
  body: string;
  id: string;
}

interface Props {
  item: Item;
}

// Using this image because the one from response is not working.
const randomImage = 'https://picsum.photos/200/300';

const Interface = (props: Props) => {
  const { username, createdAt, body } = props.item;

  const convertDate = moment(createdAt).startOf('minutes').fromNow();

  return (
    <View style={styles.container}>
      <View style={styles.avatarUsernameWrapper}>
        <Image
          source={{
            uri: randomImage,
          }}
          style={styles.avatarStyle}
        />
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.body}>{body}</Text>
        <Text style={styles.time}>{convertDate}</Text>
      </View>
    </View>
  );
};

export default Interface;
