# Conflux EVM Space Guide

## Installation and Setup

### Installing the Conflux client
1. Clone the `conflux-rust` project.
2. Switch to the `evm_space_test` branch.
3. Follow the instructions on how to build the Conflux client from source. 
4. Ensure that you can run the `conflux-rust` client.

### Installing Fluent

Fluent is a Conflux-compatible wallet that supports multiple chains, such as Bitcoin, Ethereu, and Binance SmartChain.

1. Go to http://fluentwallet.org and download and install the Fluent wallet.
2. Create a new wallet from Fluent. This wallet will be your **Conflux wallet**.

### Installing MetaMask

1. Go to http://metamask.org and download and install the MetaMask wallet.
2. Create a new wallet from MetaMask. This wallet will be your **Conflux EVM Space wallet**.


## Configuring the Conflux EVM Space

### Connecting to a local node
1. Go to the `conflux-rust` directory.
2. In the `run` directory, make a copy of the `tethys.toml` to `development.toml`.
3. Open the `development.toml` file and do the following:
   a. Comment or delete the `bootnodes` parameter (line 6).
   b. Set the node to dev mode.
```
mode = "dev"
```
   c. Set the `dev_block_interval_ms` to `1000` (you can increase or decrease the block time if you prefer).
```
dev_block_interval_ms = 1000
```
   d. Set your Conflux wallet address as the `mining_author`.
   e. Enable the JSON RPC TCP port, JSON RPC HTTP port, and JSON RPC local HTTP port.
   f. Set the `chain_id` parameter to `1030`.
   g. Add the following line to set the EVM Chain ID:
    ```
    evm_chain_id = 1030
    ```
   h. Set a genesis account to fund your Conflux wallet by adding the following line:
   ```
   genesis_secrets = "account.txt"
   ```
4. Save and close the `development.toml` file.
5. In the `run` directory, create a file called `account.txt`.
6. Go to Fluent.
7. Copy the private key of your Conflux wallet.
8. Paste the private key of your Conflux wallet into the `account.txt` file. 
9. Save and close the `account.txt` file.

### Running the Conflux EVM Space

To run the Conflux EVM space, you just need to run the `conflux-rust` client.

1. Go to the `run` directory.
2. Run the `conflux-rust` client:
```
../target/release/conflux --config development.toml
```
3. Go to Fluent.
4. Make sure you received 1000 CFX.

## Connecting Wallets to the Conflux and EVM Spaces

In this section, you'll learn how to connect different wallets to different spaces.

* To connect to the Conflux Space, you can use both Fluent and Portal.
* To connect to the EVM Space, you can use Fluent, MetaMask, or any other Ethereum-compatible wallet.

### Connecting Fluent to the Conflux Space through a local RPC endpoint

In this section, you'll learn how to connect MetaMask to your local development node that supports the EVM Space.

1. Go to **Fluent** > **Settings** > **Network Management**.
2. In **Network Management**, click **Add**.
3. In **Add**:
    a. Type "Conflux Local EVM Space" as the network name.
    b. Enter `http://127.0.0.1:12537` as the new RPC URL.
    c. Enter `1029` as the chain ID.
    d. Type "CFX" as the currency symbol.

### Connecting Fluent to the Conflux Space through a remote RPC endpoint

In this section, you'll learn how to connect Fluent to you a remote RPC endpoint that supports the Conflux Space.

In this section, you'll learn how to connect MetaMask to your local development node that supports the EVM Space.

1. Go to **Fluent** > **Settings** > **Network Management**.
2. In **Network Management**, click **Add**.
3. In **Add**:
    a. Type "Conflux Local EVM Space" as the network name.
    b. Enter `http://net12000cfx.confluxrpc.com` as the new RPC URL.
    c. Enter `12000` as the chain ID.
    d. Type "CFX" as the currency symbol.

### Connecting MetaMask to the EVM Space through a local RPC endpoint

In this section, you'll learn how to connect Fluent to you a remote RPC endpoint that supports the Conflux Space.

1. Open the MetaMask settings.
2. Go to **Networks** > **Add Network**.
3. In **Add a Network**:
    a. Type "Conflux Remote EVM Space" as the network name.
    b. Enter `http://127.0.0.1:12537` as the new RPC URL.
    c. Enter `1030` as the chain ID.
    d. Type "CFX" as the currency symbol.

### Connecting MetaMask to the EVM Space through a remote RPC endpoint

In this section, you'll learn how to connect MetaMask to you a remote RPC endpoint that supports the EVM Space.

1. Open the MetaMask settings.
2. Go to **Networks** > **Add Network**.
3. In **Add a Network**:
    a. Type "Conflux Remote EVM Space" as the network name.
    b. Enter `http://net12001eth.confluxrpc.com` as the new RPC URL.
    c. Enter `12001` as the chain ID.
    d. Type "CFX" as the currency symbol.

## Transferring funds

**Note:** Currently you can only transfer funds across spaces using the Fluent cross-space bridge. However, you can transfer funds from any wallet (e.g. Fluent to MetaMask) if they're both connected to the same space.

### Transferring funds from Tethys to the Conflux EVM Space

1. Open Fluent.
2. Click the **Cross-Space** icon.
3. Connect your Fluent wallet to the bridge application.
4. In the **Destination** field, enter your Conflux EVM Space address.
5. In **Amount**, enter the amount of CFX that you wish to transfer.
6. Click **Transfer** to transfer CFX from your Conflux Native wallet to your Conflux EVM Space wallet.
7. Go to MetaMask to verify that you received the funds.

### Transferring funds from the Conflux EVM Space to the Conflux Native Space.

1. Open Fluent.
2. Click the **Cross-Space** icon.
3. Connect your MetaMask wallet to the bridge application.
4. In the **Destination** field, enter you Conflux Native Space address.
5. In **Amount**, enter the amount of CFX that you wish to transfer.
6. Click **Transfer** to transfer CFX from your Conflux EVM Space wallet to your Conflux Native Space wallet.
7. Go to Fluent to verify that you received the funds.