import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { Breadcrumb, BreadcrumbsContextProps } from './types'
import { matchBreadcrumbs } from './match-breadcrumbs'
import { BreadcrumbsContext } from './breadcrumbs-context'

export const RootBreadcrumbs: React.FC = () => {
  const location = useLocation()
  const { routes, component: BreadcrumbTemplate } = useContext<
    BreadcrumbsContextProps
  >(BreadcrumbsContext)
  const breadcrumbs = matchBreadcrumbs({ routes, location })

  return (
    <BreadcrumbTemplate>
      {breadcrumbs.map(({ component: Component, to, title }: Breadcrumb) => (
        <Component key={title} to={to} title={title} />
      ))}
    </BreadcrumbTemplate>
  )
}
