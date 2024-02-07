import {createGlobalStore} from 'hox'
import {useState} from 'react'

export const [useStore] = createGlobalStore(()=>{
  const [d, setD] = useState(1)
  const {a, ...rest} = {a: 1, b: 2}
  return {
    d
  }
})
