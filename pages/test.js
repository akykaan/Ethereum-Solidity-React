import "./App.css";
import web3 from "./web3";
import lottery from "./lottery";
import { useEffect, useState } from "react";

function App() {
  const [manager, setManager] = useState("");
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState("");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // spinner css

  useEffect(() => {
    const managerWalletId = lottery.methods.manager().call();
    // call içinde from: accounts[0] yapmadık 0.indis metamasktaki bizim adresimiz
    // yani manager biziz
    // contractı kim yayınlarsa manager o olur
    const players = lottery.methods.getPlayers().call();
    const balance = web3.eth.getBalance(lottery.options.address);

    managerWalletId.then(function (result) {
      setManager(result); // manager wallet = 0xd...
    });

    // multi setState gibi bir şey lazım sanki
    players.then(function (result) {
      setPlayers(result);
    });

    balance.then(function (result) {
      setBalance(result);
    });
  }, [players]); // her yeni oyuncuda triggerlanması için

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const accounts = await web3.eth.getAccounts();
      setIsLoading(true);
      setMessage("Waiting on transaction success...");
      await lottery.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei(value, "ether"),
      });
      // if ile hata alınabilir hangisi daha efektif bilemedim.
      setMessage("You have been entered");
      setIsLoading(false);
    } catch (error) {
      setMessage(error.message);
      setIsLoading(false);
    }
  };

  const pickWinnerHandleClick = async () => {
    const accounts = await web3.eth.getAccounts();

    setIsLoading(true);
    setMessage("Waiting on transaction success...");
    const winnerWalletAdress = lottery.methods.pickWinner().send({
      from: accounts[0],
      // etherler 0.indis hesabında yani contractı kuran hesap yani manager hesabı
    });

    winnerWalletAdress.then(function (result) {
      setIsLoading(false);
      setMessage("Winning wallet address: "+ result.from);
    });
  };

  const renderSpinner = (
    <button className="btn btn-primary" type="button" disabled>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
        style={{ margin:2 }}
      ></span>
      Loading... - - {message}
    </button>
  );

  return (
    <div className="container">
      <h2>Lottery Contract</h2>
      <p>
        This Contract is managed by {manager}.<br /> There are currently{" "}
        {players.length} people entered, competing to win{" "}
        {web3.utils.fromWei(balance, "ether")} ether!
      </p>
      <hr />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h4> Want to try your luck?</h4>
        <div>
          <label> Amount of ether to enter </label>
          {/* <input value={value} onChange={(e) => setValue(e.target.value)} /> */}

          <div className="input-group mb-3">
            <input
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              className="form-control"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-primary">Enter</button>
      </form>
      <hr />
      <h4>Ready to pick a winner?</h4>
      <button
        type="button"
        className="btn btn-primary"
        onClick={pickWinnerHandleClick}
      >
        Pick a Winner!
      </button>
      <hr />

      {isLoading ? renderSpinner : <h2> {message} </h2>}
    </div>
  );
}

export default App;
