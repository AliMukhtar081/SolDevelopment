"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const fs = __importStar(require("fs"));
const secret = JSON.parse(fs.readFileSync("../key.json").toString());
const secretKey = Uint8Array.from(secret);
const keypairFromSecretKey = web3_js_1.Keypair.fromSecretKey(secretKey);
const owenerKeypair = web3_js_1.Keypair.fromSecretKey(secretKey);
console.log("public key:", keypairFromSecretKey.publicKey.toBase58());
const transaction = new web3_js_1.Transaction();
const recepiant = new web3_js_1.PublicKey("FcnyBWUeWrQyxz6ZFPjPq4b5iRSH29nQgNv2hPFtLJsL");
const sendSolInstruction = web3_js_1.SystemProgram.transfer({
    fromPubkey: owenerKeypair.publicKey,
    toPubkey: recepiant,
    lamports: web3_js_1.LAMPORTS_PER_SOL * 0.1
});
const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)("devnet"));
transaction.add(sendSolInstruction);
const signature = (0, web3_js_1.sendAndConfirmTransaction)(connection, transaction, [owenerKeypair]);
