/**
 * Interface representing the amount in a wallet.
 */
interface Amount {
  amount: string;
  currency: string;
}

/**
 * Interface representing a wallet.
 */
export interface Wallet {
  accountId: string;
  companyName: string;
  amount: Amount;
  creditDebitIndicator: string;
  datetime: string;
}
