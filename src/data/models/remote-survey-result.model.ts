export type RemoteSurveyResultModel = {
  question: string
  date: string
  answers: RemoteSurveyAnswerModel[]
}

export type RemoteSurveyAnswerModel = {
  image?: string
  answer: string
  count: number
  percent: number
  isCurrentAccountAnswer: boolean
}
