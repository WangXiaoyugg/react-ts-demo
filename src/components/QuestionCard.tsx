import React from 'react'
import type { FC } from 'react'

interface QuestionCardProps {
  id: number
  title: string
  isPublished: boolean
}

const QuestionCard: FC<QuestionCardProps> = props => {
  const { id, title, isPublished } = props
  const edit = (id: number) => {
    console.log('编辑：', id)
  }

  return (
    <li key={id} className="list-item">
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? <span style={{ color: 'green' }}>已发布</span> : '未发布'}
      <button onClick={() => edit(id)}>编辑问卷</button>
    </li>
  )
}

export { QuestionCard }
