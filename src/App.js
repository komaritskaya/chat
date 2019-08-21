import React from 'react';
import Chat from './components/Chat';
import './App.css';
import chat_avatar_01 from './i/chat_avatar_01.jpg';
import chat_avatar_02 from './i/chat_avatar_02.jpg';
import chat_avatar_03 from './i/chat_avatar_03.jpg';
import chat_avatar_04 from './i/chat_avatar_04.jpg';
import chat_avatar_05 from './i/chat_avatar_05.jpg';
import chat_avatar_06 from './i/chat_avatar_06.jpg';
import chat_avatar_07 from './i/chat_avatar_07.jpg';
import chat_avatar_08 from './i/chat_avatar_08.jpg';
import chat_avatar_09 from './i/chat_avatar_09.jpg';
import chat_avatar_10 from './i/chat_avatar_10.jpg';

const messages = [
  {
    id: 'chat-5-1090',
    from: { name: 'Ольга' },
    type: 'response',
    time: '10:10',
    text: 'Привет, Виктор. Как дела? Как идет работа над проектом?',
  },
  {
    id: 'chat-5-1091',
    from: { name: 'Виктор' },
    type: 'message',
    time: '10:12',
    text:
      'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.',
  },
  {
    id: 'chat-5-1092',
    from: { name: 'Ольга' },
    type: 'response',
    time: '10:14',
    text:
      'Не уверена что сегодня получится. Не все еще в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?',
  },
  {
    id: 'chat-5-1093',
    from: { name: 'Виктор' },
    type: 'message',
    time: '10:20',
    text: 'Нет, все прошло гладко. Очень хочу показать всё команде.',
  },
  {
    id: 'chat-5-1094',
    from: { name: 'Виктор' },
    type: 'typing',
    time: '10:31',
  },
];

const chats = [
  {
    avatar: chat_avatar_01,
    name: 'Виктор Иванов',
    isOnline: true,
  },
  {
    avatar: chat_avatar_02,
    name: 'Адрей Гагарин',
    isOnline: false,
    lastSeen: '7 минут назад',
  },
  {
    avatar: chat_avatar_03,
    name: 'Михаил Толмачев',
    isOnline: true,
  },
  {
    avatar: chat_avatar_04,
    name: 'Настя Ушакова',
    isOnline: true,
  },
  {
    avatar: chat_avatar_05,
    name: 'Евгения Барышникова',
    isOnline: true,
  },
  {
    avatar: chat_avatar_06,
    name: 'Тамара Плотникова',
    isOnline: false,
    lastSeen: '30 минут назад',
  },
  {
    avatar: chat_avatar_07,
    name: 'Кирилл Аникеев',
    isOnline: false,
    lastSeen: '10 часов назад',
  },
  {
    avatar: chat_avatar_08,
    name: 'Марина Пух',
    isOnline: true,
  },
  {
    avatar: chat_avatar_09,
    name: 'Георгий Усачов',
    isOnline: false,
    lastSeen: '28 марта',
  },
  {
    avatar: chat_avatar_10,
    name: 'Наталья Симакова',
    isOnline: false,
    lastSeen: '4 января',
  },
];

function App() {
  return (
    <div className="App">
      <Chat chats={chats} messages={messages} />
    </div>
  );
}

export default App;
