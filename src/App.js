import React from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

const PROGRAM_ID = new PublicKey('Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS'); // Твій program ID

function App() {
  const mintNFT = async () => {
    const connection = new Connection('https://api.devnet.solana.com');
    // Логіка мінтингу (інтегруй з Anchor/Metaplex)
    console.log('Minting NFT...');
    // Тут код для виклику create_mint з твого першого репо
  };

  return (
    <div className="App">
      <h1>Solana NFT Minter</h1>
      <button onClick={mintNFT}>Mint NFT!</button>
      <p>Connect wallet to mint on devnet.</p>
    </div>
  );
}

export default App;
