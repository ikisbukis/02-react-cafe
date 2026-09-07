import { useState } from 'react'
import CafeInfo from '../CafeInfo/CafeInfo'
import type {Votes, VoteType} from '../../types/votes'
import VoteOptions from '../VoteOptions/VoteOptions'
import VoteStats from '../VoteStats/VoteStats'
import Notification from '../Notification/Notification'

function App() {

  const [votes, setVotes] = useState<Votes>({good: 0, neutral: 0, bad: 0});

  const totalVotes = votes.bad + votes.good + votes.neutral;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0

  function handleVote(type : VoteType) {
      setVotes(prev => ({...prev, [type]: prev[type] + 1}))
  }

  function resetVotes() {
      setVotes({ good: 0, neutral: 0, bad: 0})
  }
  
  return (
    <>
      <CafeInfo />
      <VoteOptions canReset={totalVotes > 0} onVote={handleVote} onReset={resetVotes}/>
      {totalVotes === 0 ? 
      <Notification /> 
      : 
      <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate}/>}
    
    </>
  )
}

export default App
