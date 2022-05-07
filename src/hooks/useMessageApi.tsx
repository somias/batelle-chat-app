import { useCallback, useState } from 'react';
import API from '~/rest/api';

import { MessageType } from '~/types/messageType';

export default () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getMessages = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(API.CHAT_MESSAGES, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const data = await response.json();

      // Sort messages by createdAt, from oldest to newest
      const sortMessagesByDate = data.sort((a: MessageType, b: MessageType) => {
        return a.createdAt > b.createdAt
          ? 1
          : a.createdAt < b.createdAt
          ? -1
          : 0;
      });

      setMessages(sortMessagesByDate);
    } catch (err) {
      console.log('Error while getting messages:', err);
      setError("Oops, looks like we can't get the messages right now.");
    } finally {
      setLoading(false);
    }
  }, []);

  return { getMessages, messages, setMessages, loading, error };
};
