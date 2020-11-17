import React, { useState } from 'react'
import CounterList from './CounterList'
import Header from './Header'

const App = () => {
  const [counters, setCounters] = useState(0)

  const increaseCounters = () => {
    setCounters(counters + 1)
  }

  const decreaseCounters = () => {
    setCounters(counters === 0 ? 0 : counters - 1)
  }

  return (
    <div className="App">
      <Header
        increaseCounters={increaseCounters}
        decreaseCounters={decreaseCounters} />
      <CounterList
        counters={counters} />
    </div>
  );
}

export default App;
