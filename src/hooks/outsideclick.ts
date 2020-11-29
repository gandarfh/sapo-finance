import { useEffect, RefObject } from 'react'
import { AnyStyledComponent } from 'styled-components'

export const useOutsideClick = (
  ref: RefObject<AnyStyledComponent>,
  callback: () => void
) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}
