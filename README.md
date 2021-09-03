# react-router-config-breadcrumbs

### Install

#### Create file .npmrc
```
echo "@awesome-typescript:registry=https://npm.pkg.github.com" > .npmrc
```
#### Install npm package
```
npm install @awesome-typescript/react-router-config-breadcrumbs@1.0.0 --save --save-exact
```

```tsx
export const App = () => (
    <BreadcrumbsProvider template={Breadcrumbs} routes={routes}>
        <App />
    </BreadcrumbsProvider>
)
```

```tsx
import { RouteConfig as AuthRouteConfig } from '@awesome-typescript/react-router-config-auth'
import { RouteConfig as BreadcrumbRouteConfig } from '@awesome-typescript/react-router-config-breadcrumbs'
import { BreadcrumbProps } from '@awesome-typescript/react-router-config-breadcrumbs'

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ to, title }) => (
  <CustomBreadcrumb>
    <Link to={to}>
      {title}
    </Link>
  </CustomBreadcrumb>
)

export type RouteConfig = BreadcrumbRouteConfig & AuthRouteConfig

export const routes: RouteConfig[] = [
  {
    path: '/login',
    exact: true,
    component: LoginPage,
  },
  {
    component: MainTemplate,
    routes: [
      {
        path: '/posts',
        exact: true,
        component: React.lazy(
          () => import('./routes/posts'),
        ),
        settings: {
          breadcrumbs: [
            {
              title: 'Home',
              component: Breadcrumb,
            },
            {
              title: 'Posts',
              to: '/posts',
              component: Breadcrumb,
            },
          ],
          roles: [CanBrowsePosts],
        },
      },
      {
        path: '/news',
        exact: true,
        component: React.lazy(() => import('./routes/news')),
        settings: {
          breadcrumbs: [
            {
              title: 'Home',
              component: Breadcrumb,
            },
            {
              title: 'News',
              to: '/posts',
              component: Breadcrumb,
            },
          ],
          roles: [CanBrowseNews],
        },
      },
  	]
  }
]
```
