import type { VaporDirective } from 'vue'

interface DirectiveTargetReport {
  caseName: string
  constructorName: string
  hasVaporFragmentMarker: boolean
  hasVNode: boolean
  isElement: boolean
  keys: string[]
}

export const reports: DirectiveTargetReport[] = []

export function createCustomDirective(caseName: string): VaporDirective {
  return target => {
    const object = target as unknown as Record<string, unknown>
    const report = {
      caseName,
      constructorName: target.constructor.name,
      hasVaporFragmentMarker: object.__vf === true,
      hasVNode: 'vnode' in object,
      isElement: target instanceof Element,
      keys: Object.keys(target),
    }

    reports.push(report)
    console.log('[custom directive target]', report, target)

    const element = target as Element
    element.setAttribute('data-custom-directive', 'applied')
  }
}
