import css from "./VoteOptions.module.css"
import type { VoteType} from '../../types/votes'

interface VoteOptionsT {
    canReset: boolean,
    handleVote: (type: VoteType) => void,
    resetVotes: () => void
}

const VoteOptions = ({canReset, handleVote, resetVotes} : VoteOptionsT) => {

    return (
        <>
            <div className={css.container}>
                <button onClick={() => handleVote("good")} className={css.button}>Good</button>
                <button onClick={() => handleVote("neutral")} className={css.button}>Neutral</button>
                <button onClick={() => handleVote("bad")} className={css.button}>Bad</button>
                {canReset && <button className={` ${css.button} ${css.reset}`} onClick={() => resetVotes()} >Reset</button>}
            </div>
        </>
    )
}

export default VoteOptions;