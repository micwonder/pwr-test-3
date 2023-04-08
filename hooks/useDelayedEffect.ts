import { DependencyList, useEffect } from 'react'

export const useDelayedEffect = (callback: () => unknown, delay: number, deps?: DependencyList) =>
  useEffect(() => {
    const id = setTimeout(callback, delay)
    return () => clearTimeout(id)
  }, deps)
