import {clusterApiUrl, Connection, Keypair,LAMPORTS_PER_SOL,PublicKey,sendAndConfirmTransaction,SystemProgram,Transaction} from '@solana/web3.js';
import * as fs from 'fs';

const secret = JSON.parse(fs.readFileSync("../key.json").toString()) as number[]
const secretKey = Uint8Array.from(secret)
const keypairFromSecretKey = Keypair.fromSecretKey(secretKey)
const owenerKeypair=Keypair.fromSecretKey(secretKey)

console.log("public key:",keypairFromSecretKey.publicKey.toBase58())

async function solTransaction()
{
const transaction = new Transaction()
const recepiant=new PublicKey("FcnyBWUeWrQyxz6ZFPjPq4b5iRSH29nQgNv2hPFtLJsL")

const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: owenerKeypair.publicKey,
    toPubkey: recepiant,
    lamports: LAMPORTS_PER_SOL * 0.1
})
const connection = new Connection( clusterApiUrl("devnet"))
transaction.add(sendSolInstruction)
const signature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [owenerKeypair]
)
console.log("signature:",signature)
}
solTransaction()