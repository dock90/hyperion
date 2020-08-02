import { useState } from 'react'
import Toggle from '../components/toggle'

const Components = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <h1>Components</h1>
      <p>Toggle</p>
      <Toggle
        checked={checked}
        onChange={() => setChecked(event.target.checked)}
      />
    </div>
  )
}

export default Components
