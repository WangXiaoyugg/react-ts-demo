import React, { useEffect } from 'react'
import type { FC } from 'react'

interface QuestionCardProps {
  id: number
  title: string
  isPublished: boolean
  deleteQuestion?: (id: number) => void
  editQuestion?: (id: number) => void
}

const QuestionCard: FC<QuestionCardProps> = props => {
  const { id, title, isPublished, deleteQuestion, editQuestion } = props

  function delQuestion() {
    deleteQuestion && deleteQuestion(id)
  }

  function edit() {
    editQuestion && editQuestion(id)
  }

  useEffect(() => {
    console.log('QuestionCard mounted:', id)
    return () => {
      console.log('QuestionCard unmounted:', id)
    }
  }, [])

  return (
    <li key={id} className="list-item">
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? <span style={{ color: 'green' }}>已发布</span> : '未发布'}
      <button onClick={edit}>编辑问卷</button>
      <button onClick={delQuestion}>删除问卷</button>
    </li>
  )
}

export { QuestionCard }
