import React from 'react'
import Counter from './Counter'


const CounterList = (props) => {

  let counters = []

  for (let i = 0; i < props.counters; i++) {
    counters.push(<Counter key={i} />)
  }

  return (
    <div className="Counter-row">
      { counters}
    </div>
  )
}


export default CounterList