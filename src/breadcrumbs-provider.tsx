import React, { useState } from 'react'

import { BreadcrumbsContext } from './breadcrumbs-context'
import { BreadcrumbsContextProps, BreadcrumbsProviderProps } from './types'

export const BreadcrumbsProvider: React.FC<BreadcrumbsProviderProps> = (
  props,
) => {
  const [value] = useState<BreadcrumbsContextProps>({
    component: props.template,
    routes: props.routes,
  })

  return (
    <BreadcrumbsContext.Provider value={value}>
      {props.children}
    </BreadcrumbsContext.Provider>
  )
}
