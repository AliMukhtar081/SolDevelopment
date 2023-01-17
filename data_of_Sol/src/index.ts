import { clusterApiUrl, Connection, PublicKey,LAMPORTS_PER_SOL } from "@solana/web3.js";

async function getBalanceUsingWeb3(address: PublicKey): Promise<number> {
    const connection = new Connection(clusterApiUrl('devnet'));
    return connection.getBalance(address);
}

const publicKey = new PublicKey('4AJrinSDfkuNsoyt2N1wn68tCSvvEuTUxUpGoDzjuiDR')
getBalanceUsingWeb3(publicKey).then(balance => {
    console.log(balance/LAMPORTS_PER_SOL)
})