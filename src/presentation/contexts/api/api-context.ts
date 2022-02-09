import { createContext } from 'react'
import { AccountModel } from '@/domain/models'

type Props = {
  setCurrentAccount?: (account: AccountModel) => void
  getCurrenctAccount?: () => AccountModel
}

export default createContext<Props>(null)
