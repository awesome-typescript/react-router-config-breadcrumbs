import React from 'react'
import { RouteConfig as ReactRouteConfig } from 'react-router-config'

export type BreadcrumbProps = {
  to?: string
  title: string
  component: Function
}

type RouteSettings = {
  breadcrumbs?: BreadcrumbProps[]
}

export type RouteConfig = ReactRouteConfig & {
  settings?: RouteSettings
  routes?: RouteConfig[]
}

export type BreadcrumbsContextProps = {
  component: Function
  routes: RouteConfig[]
}

export type BreadcrumbsProviderProps = {
  template: Function
  routes: RouteConfig[]
  children: React.ReactNode
}
