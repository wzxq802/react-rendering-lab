import { Profiler } from 'react'
import { ItemsPage } from '@/pages/items-page'

export function App() {
  return (
    <Profiler
      id="ItemsPage"
      onRender={(id, phase, actualDuration) => {
        console.log(id, phase, actualDuration.toFixed(2), 'ms')
      }}
    >
      <ItemsPage />
    </Profiler>
  )
}