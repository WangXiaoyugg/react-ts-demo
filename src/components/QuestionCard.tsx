import React, { useEffect } from 'react'
import type { FC } from 'react'
import styles from './QuestionCard.module.scss'
import clsx from 'clsx'
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

  const itemClass = styles['list-item']
  const publishedItemClass = styles['published-item']

  const listItemClass = clsx(itemClass, { [publishedItemClass]: isPublished })

  return (
    <li key={id} className={listItemClass}>
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? <span className={styles['published-span']}>已发布</span> : '未发布'}
      <button onClick={edit}>编辑问卷</button>
      <button onClick={delQuestion}>删除问卷</button>
    </li>
  )
}

export { QuestionCard }
