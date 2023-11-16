import React from 'react'
import type { FC } from 'react'
import { QuestionCard } from './components/QuestionCard'

const List1: FC = () => {
  const questionList = [
    { id: 1, title: '问卷1', isPublished: false },
    { id: 2, title: '问卷2', isPublished: true },
    { id: 3, title: '问卷3', isPublished: false },
    { id: 4, title: '问卷4', isPublished: true },
  ]

  return (
    <div>
      <h1>问卷列表页</h1>
      <ul>
        {questionList.map(q => {
          const { id, title, isPublished } = q
          return <QuestionCard key={id} id={id} title={title} isPublished={isPublished} />
        })}
      </ul>
    </div>
  )
}

export { List1 }
