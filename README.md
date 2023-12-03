# Energy8 Wallet massa-provider

### Implementation of Energy8 web3 wallet to access the massа chain

`e8w-massa-provider` is a TypeScript library to easily connect frontend applications with browser energy8 wallet extension and massa blockchain.

## Installation

```sh
npm install @energy8/massa-provider
```

## Usage

import (this script works only in the browser!)
```javascript
import { web3 } from '@energy8/massa-provider';
```

<table>
<thead>
<tr>
<th>Code</th>
<th>Signature</th>
<th>Returned</th>
</tr>
</thead>
<tbody>

<tr>
<td><code>wallet.connect</code></td>
<td>
</td>

<td>

```Promise<boolean>```

</td>
</tr>

<tr>
<td><code>wallet.connected</code></td>
<td>
</td>

<td>

```boolean```

</td>
</tr>

<tr>
<td>
    <code>wallet.unlocked</code><br>
    <span>state locked/unlocked wallet extension</span>
</td>
<td>
</td>

<td>

```boolean```

</td>
</tr>

<tr>
<td><code>wallet.account.address</code></td>
<td>
</td>
<td>

```string```

</td>
</tr>

<tr>
<td><code>wallet.account.sign</code></td>
<td>

```yaml
data:
  type: Buffer | Uint8Array | string
```

</td>

<td>
<div>

```Promise<IAccountSignOutput>```

</div>
<div>

```json
{
  "publicKey": "...",
  "base58Encoded": "..."
}
```

</div>
</td>

</tr>

<tr>
<td><code>wallet.account.buyRolls</code></td>
<td>

```yaml
amount:
  type: bigint
fee:
  type: bigint
```

</td>

<td>
<div>

```Promise<ITransactionDetails>```

</div>
<div>

```json
{
  "operationId": "B1t..."
}
```

</div>
</td>

</tr>

<tr>
<td><code>wallet.account.sellRolls</code></td>
<td>

```yaml
amount:
  type: bigint
fee:
  type: bigint
```

</td>

<td>
<div>

```Promise<ITransactionDetails>```

</div>
<div>

```json
{
  "operationId": "B1t..."
}
```

</div>
</td>

</tr>

<tr>
<td><code>wallet.account.sendTransaction</code></td>
<td>

```yaml
amount:
  type: bigint
recipientAddress:
  type: string
fee:
  type: bigint
```

</td>

<td>
<div>

```Promise<ITransactionDetails>```

</div>
<div>

```json
{
  "operationId": "B1t..."
}
```

</div>
</td>

</tr>

<tr>
<td><code>contract.execSmartContract</code></td>
<td>

```yaml
contractAddress:
  type: string
functionName:
  type: string
parameter:
  type: Uint8Array
amount:
  type: bigint
fee:
  type: bigint 
maxGas:
  type: bigint
```

</td>

<td>
<div>

```Promise<ITransactionDetails>```

</div>
<div>

```json
{
  "operationId": "B1t..."
}
```

</div>
</td>

</tr>

</tbody></table>

### Example

```ts

import {web3} from '@energy8/massa-provider'

(async () => {
    await web3.wallet.connect()

    console.log('connected', web3.wallet.connected)

    //base58 address string
    console.log('connected', web3.wallet.account.address())

    /**
     * {finalBalance: string, candidateBalance: string}
     */
    console.log('balance', web3.wallet.account.balance())

    /**
     * state locked/unlocked wallet extension
     */
    console.log('unlocked', web3.wallet.unlocked)

    /**
     * returned ITransactionDetails
     * {operationId: string}
     */
    console.log('unlocked', web3.wallet.account.buyRolls(
        10n,
        10n,
    ))

    /**
     * returned ITransactionDetails
     * {operationId: string}
     */
    console.log('execSC', web3.contract.execSmartContract(
        'AU166n9NvYrSGfMoXAPnwD4hXyLzZchJHj1TUkWwBEae8L3X8MwB',
        'someFunctionName',
        new Uint8Array([4,   0,   0,   0, 116, 101, 115, 116]),
        10n,
        10n,
        100000000n
    ))
})();

```
