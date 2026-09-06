import styles from "./VoteStats.module.css"

interface VoteStats {
    good: number,
    neutral: number,
    bad: number,
    total: number,
    positive: number
}

const VoteStats = ({good, neutral, bad, total, positive} : VoteStats) => {
    return (
        <>
          <div className={styles.container}>
            <p className={styles.stat}>Good: <strong>{good}</strong></p>
            <p className={styles.stat}>Neutral: <strong>{neutral}</strong></p>
            <p className={styles.stat}>Bad: <strong>{bad}</strong></p>
            <p className={styles.stat}>Total: <strong>{total}</strong></p>
            <p className={styles.stat}>Positive: <strong>{`${positive}%`}</strong></p>
          </div>
        </>
    )
}

export default VoteStats;