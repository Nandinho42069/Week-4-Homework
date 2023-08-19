import { useAccount, useNetwork } from "wagmi";
import styles from "./instructionsComponent.module.css";
import { useState } from "react";

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
      <WalletInfo></WalletInfo>
      <PageBody></PageBody>
    </div>
  );
}

function PageBody() {
  const { address } = useAccount();

  return (
    <div className={styles.buttons_container}>
      <DelegateVote></DelegateVote>
      <PlaceVote></PlaceVote>
      <SeeCurrentVotes></SeeCurrentVotes>
      <MintTokens address={address}></MintTokens>
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
        <p>Connecting wallet...</p>
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
    <button className={styles.button}>
      <p>Delegate Vote</p>
    </button>
  )
}

function PlaceVote() {
  return (
    <button className={styles.button}>
      <p>Place Vote</p>
    </button>
  )
}

function SeeCurrentVotes() {
  return (
    <button className={styles.button}>
      <p>See Current Votes</p>
    </button>
  )
}

function MintTokens(params: { address: `0x${string}` | undefined }) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);

  const requestOptions = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ address: params.address })
  };

  if (isLoading) return (
    <button className={styles.button}>
      Requesting tokens from API...
    </button>
  )

  if (!data) return <p>
    <button
        disabled={isLoading}
        className={styles.button}
        onClick={() => {
          setLoading(true);
          fetch("http://localhost:3001/mint-tokens", requestOptions)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setLoading(false)
          });
        }}
    >
      Request Tokens
    </button>
  </p>;

  const hash = String(data.txHash);
  const ETHScanLink = "https://sepolia.etherscan.io/tx/" + hash;
  const shortHash = hash.slice(0,5) + "..." + hash.slice(-3)

  return (
    <button className={styles.button}>
      TX: <a href={ETHScanLink}>{shortHash}</a>
    </button>
  )
}