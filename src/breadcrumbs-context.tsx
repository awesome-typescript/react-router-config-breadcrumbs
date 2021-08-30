import { createContext } from 'react'

import { BreadcrumbsContextProps } from './types'

export const BreadcrumbsContext = createContext<BreadcrumbsContextProps>({
  component: () => null,
  routes: [],
})
