import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/tinega/Desktop/everything/git-repos/globe-farmer-main/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}