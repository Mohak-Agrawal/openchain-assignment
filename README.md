# DApp with WalletConnect Integration

This project consists of a simple Decentralized Application (DApp) that interacts with a smart contract deployed on the Ganache local blockchain. It includes a React frontend with WalletConnect integration, allowing users to connect their preferred wallet.

## Installation

To get started, you need to install the required dependencies in both the `client` and `truffle` folders.

### Prerequisites

- Node.js
- Ganache
- Truffle
- Infura (for deploying to Sepolia)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:

   ```bash
   cd client
   npm install
   cd ../truffle
   npm install
   ```

## Running the Client

1. Start the React application:

   ```bash
   cd client
   npm start
   ```

2. Ensure Ganache is running in the background.

3. The React app consists of smart contract code to get and set a value, which interacts with a Solidity smart contract deployed on Ganache. It also includes WalletConnect integration, allowing you to connect to any wallet of your choice.

## Working with Truffle

1. Compile the smart contracts:

   ```bash
   cd truffle
   truffle compile
   ```

2. Deploy the smart contracts to the Ganache network:

   ```bash
   truffle migrate --network development
   ```

3. Deploy the smart contracts to the Sepolia test network:

   ```bash
   truffle migrate --network sepolia
   ```

## Project Structure

your-repo/
├── client/ # React frontend
├── truffle/ # Truffle project for smart contracts
├── README.md
└── package.json

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
