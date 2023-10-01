import React, {useState, useEffect} from 'react';
import DiaryEditor from './components/DiaryEditor';
import DiaryList from './components/DiaryList';

const dummyList =[
  {
    id:1,
    author: "이정환",
    content: "하이1",
    emotion:5,
    created_date: new Date().getTime()
  },

  {
    id:2,
    author: "홍길동",
    content: "하이2",
    emotion:2,
    created_date: new Date().getTime()
  },

  {
    id:3,
    author: "아무개",
    content: "하이3",
    emotion:1,
    created_date: new Date().getTime()
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
