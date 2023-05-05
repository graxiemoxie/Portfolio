import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': React.DetailedHTMLProps<{ name?: string, className?: string, class?: string, src?: string}, HTMLElement>;
    }
  }
}
