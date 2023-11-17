import React, { useState } from 'react'
import type { FC } from 'react'
import { QuestionCard } from './components/QuestionCard'
import { produce } from 'immer'

let id = 4
const List2: FC = () => {
  const [questionList, setQuestionList] = useState([
    { id: 1, title: '问卷1', isPublished: false },
    { id: 2, title: '问卷2', isPublished: true },
    { id: 3, title: '问卷3', isPublished: false },
    { id: 4, title: '问卷4', isPublished: true },
  ])

  //   useEffect(() => {
  //     console.log('加载ajax请求')
  //   }, [])

  //   useEffect(() => {
  //     console.log('questionList changed')
  //   }, [questionList])

  function add() {
    id++
    setQuestionList(
      produce(draft => {
        draft.push({ id, title: '问卷' + id, isPublished: false })
      })
    )
  }

  function deleteQuestion(id: number) {
    setQuestionList(
      produce(draft => {
        const index = draft.findIndex(q => q.id === id)
        draft.splice(index, 1)
      })
    )
  }

  function editQuestion(id: number) {
    setQuestionList(
      produce(draft => {
        const question = draft.find(q => q.id === id)
        question!.isPublished = true
      })
    )
  }

  return (
    <div>
      <h1>问卷列表页</h1>
      <ul>
        {questionList.map(q => {
          const { id, title, isPublished } = q
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              deleteQuestion={deleteQuestion}
              editQuestion={editQuestion}
            />
          )
        })}
      </ul>
      <div>
        <button onClick={add}>新增问卷</button>
      </div>
    </div>
  )
}

export { List2 }
