import { useRef, useState } from "react"
import "../css/DiaryEditor.css"

export default function DiaryEditor() {

  const authorInput = useRef();
  const contentInput = useRef();

  const [staet, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...staet,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    if(staet.author.length < 1) {
      alert("작성자는 최소 1글자 이상 입력해주세요");
      authorInput.current.focus()
      return;
    }

    if(staet.content.length < 5) {
      alert("일기 본문은 최소 5글자 이상 입력해주세요");
      contentInput.current.focus()
      return;
    }

    alert("저장 성공");
  }

  return(
    <>
      <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
          <input ref={authorInput} name="author" value={staet.author} onChange={handleChangeState} />
        </div>
        <div>
          <textarea ref={contentInput} name="content" value={staet.content} onChange={handleChangeState} />
        </div>
        <div>
          <select name="emotion" value={staet.emotion} onChange={handleChangeState}>
            오늘의 감정점수 :
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
      </div>
    </>
  )
}