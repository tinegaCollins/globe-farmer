import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/tinega/Desktop/everything/git-repos/globe-farmer-main/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}