import styles from "./instructionsComponent.module.css";

export default function InstructionsComponent() {
  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <div className={styles.header}>
          <h1>
            Web3<span> Voting dApp</span>
          </h1>
          <h3>The Encode Club's Solidity Bootcamp fourth week homework</h3>
          <p>Completed by Nanda Girish, Antony Siahaan, Adam Czopp and Linus Kelsey.</p>
        </div>
      </header>

      <div className={styles.buttons_container}>
        <a
          target={"_blank"}
        >
          <div className={styles.button}>
            <p>Delegate Vote</p>
          </div>
        </a>
        <a
          target={"_blank"}
        >
          <div className={styles.button}>
            <p>Place Vote</p>
          </div>
        </a>
        <a
          target={"_blank"}
        >
          <div className={styles.button}>
            <p>See Current Votes</p>
          </div>
        </a>
        <a>
          <div className={styles.button}>
            <p>Mint Voting Tokens</p>
          </div>
        </a>
      </div>
    </div>
  );
}
