import { useAccount, useNetwork } from "wagmi";
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
      <div>
        <WalletInfo></WalletInfo>
      </div>
      <PageBody></PageBody>
    </div>
  );
}

function PageBody() {
  return (
    <div className={styles.buttons_container}>
      <DelegateVote></DelegateVote>
      <PlaceVote></PlaceVote>
      <SeeCurrentVotes></SeeCurrentVotes>
      <MintTokens></MintTokens>
    </div>
  )
}

function WalletInfo() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { chain } = useNetwork();
  if (address)
    return (
      <div>
        <p>Your account address is {address}.</p>
        <p>Connected to the {chain?.name} network.</p>
      </div>
    );
  if (isConnecting)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  if (isDisconnected)
    return (
      <div>
        <p>Wallet disconnected. Connect wallet to continue.</p>
      </div>
    );
  return (
    <div>
      <p>Connect wallet to continue.</p>
    </div>
  );
}

function DelegateVote() {
  return (
    <div className={styles.button}>
      <p>Delegate Vote</p>
    </div>
  )
}

function PlaceVote() {
  return (
    <div className={styles.button}>
      <p>Place Vote</p>
    </div>
  )
}

function SeeCurrentVotes() {
  return (
    <div className={styles.button}>
      <p>See Current Votes</p>
    </div>
  )
}

function MintTokens() {
  return (
    <div className={styles.button}>
      <p>Mint Voting Tokens</p>
    </div>
  )
}