import { Injectable } from '@nestjs/common';
import {ethers} from "ethers";

const TOKEN_ADDRESS = "";

@Injectable()
export class AppService {
  contract;
  provider;
  wallet;

  constructor(){
    this.provider = new ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? "");
    this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", this.provider);
    this.contract = new ethers.Contract(TOKEN_ADDRESS, TokenJSON.abi, this.wallet);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
