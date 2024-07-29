import { useState, useEffect } from "react";
import SimpleStorage from "./contracts/SimpleStorage.json";
import Web3 from "web3";
import Auth, { Web3ModalProvider } from "./components/Web3ModalProvider";
import ConnectButton from "./components/ConnectButton";

function App() {
  const [state, setState] = useState({
    web3: null,
    contract: null,
    accounts: null,
  });

  const [data, setData] = useState("nill");

  useEffect(() => {
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");

    async function template() {
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorage.networks[networkId];
      const contract = new web3.eth.Contract(
        SimpleStorage.abi,
        deployedNetwork.address
      );
      console.log("accounts", accounts);
      console.log(contract);
      setState({ web3: web3, contract: contract, accounts: accounts });
    }
    provider && template();
  }, []);

  useEffect(() => {
    const { contract } = state;
    async function readData() {
      console.log("first");
      const data = await contract.methods.read().call();

      console.log("readData", data);
      setData(data.toString());
    }
    contract && readData();
  }, [state]);

  async function writeData() {
    const { contract, accounts } = state;
    const data = document.querySelector("#value").value;
    const res = await contract.methods.write(data).send({ from: accounts[0] });
    window.location.reload();
  }

  return (
    <Web3ModalProvider>
      <>
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">DApp</h1>
          <ConnectButton />
        </header>
        <main className="container mx-auto mt-10">
          <h1 className="text-4xl font-bold text-center mb-10">
            Welcome to Dapp
          </h1>
          <div className="App flex flex-col items-center">
            <p className="text-lg mb-4">Contract Data: {data}</p>
            <div className="mb-4">
              <input
                type="text"
                id="value"
                required="required"
                className="border-2 border-gray-300 p-2 rounded w-full max-w-xs"
                placeholder="Enter new value"
              />
            </div>
            <button
              onClick={writeData}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Change Data
            </button>
          </div>
        </main>
      </>
    </Web3ModalProvider>
  );
}

export default App;
