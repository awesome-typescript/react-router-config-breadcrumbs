import { MatchedRoute, matchRoutes } from 'react-router-config'
import { Location } from 'history'

import { Breadcrumb, RouteConfig } from './types'

export const matchBreadcrumbs = ({
  routes,
  location,
}: {
  routes: RouteConfig[]
  location: Location
}): Breadcrumb[] => {
  const matchedRoutes = matchRoutes(routes, location.pathname)

  return compose(
    flattenBreadcrumbs,
    filterByBreadcrumbsSettings,
    flattenRoutes,
  )(matchedRoutes)
}

const flattenRoutes = (routes: RouteConfig[]): RouteConfig =>
  routes.reduce((accumulator, value) => accumulator?.concat(value), []) ?? []

const filterByBreadcrumbsSettings = (routes: RouteConfig) =>
  routes.filter(isBreadcrumbSettingsExists)

const isBreadcrumbSettingsExists = (route: RouteConfig): boolean =>
  route?.route?.settings?.breadcrumbs.length >= 1 ?? false

const flattenBreadcrumbs = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  routes: { route: RouteConfig; match: MatchedRoute<any> }[],
): Breadcrumb[] => {
  return (
    routes
      .map((route) => route?.route?.settings?.breadcrumbs)
      .reduce((accumulator, value = []) => accumulator?.concat(...value), []) ??
    []
  )
}

const compose = <A, B, C, D>(
  fn1: (arg: C) => D,
  fn2: (arg: B) => C,
  fn3: (arg: A) => B,
): ((arg: A) => D) => (value) => fn1(fn2(fn3(value)))
