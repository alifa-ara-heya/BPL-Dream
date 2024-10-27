import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Players from "./components/Players/Players";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // claim coin btn function
  const [coins, setCoins] = useState(0);
  const handleClaimCreditBtn = () => {
    setCoins(coins + 5000000);
  }

  //available and players btn toggle function
  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available'
  });


  const handleIsActive = status => {
    if (status === 'available') {
      setIsActive({
        available: true,
        status: 'available'
      })
    } else {
      setIsActive({
        available: false,
        status: 'selected'
      })
    }
  }


  // choose player btn functionality
  const [chosenPlayers, setChosenPlayers] = useState([]);

  const handleChosenPlayers = (player) => {
    const isExist = chosenPlayers.find(p => p.id === player.id);
    if (isExist) {
      // alert('player already chosen')
      toast.error('Player already selected')//this is not needed as we are disabling the button.      
    }
    else if (coins < player.biddingPrice) {
      toast.warning('Please claim more free credits.')
    }
    else if (chosenPlayers.length > 5) {
      toast.warn('You cannot choose more than 6 players')
    }    
    else {
      setChosenPlayers([...chosenPlayers, player])
      setCoins(coins - (player.biddingPrice))
      toast.success('Player is being selected.')
    }

  }

  // delete btn functionality
  const handleDelete = id => {
    const playerToDelete = chosenPlayers.find(player => player.id === id);
    
    if (playerToDelete) { // Ensure the player is found before accessing biddingPrice
      const remainingPlayers = chosenPlayers.filter(player => player.id !== id);
      setChosenPlayers(remainingPlayers);
      setCoins(coins + playerToDelete.biddingPrice);
  } else {
      toast.error('Player not found');
  }}

  return (
    <>

      <Navbar coins={coins}></Navbar>

      <Banner
        handleClaimCreditBtn={handleClaimCreditBtn}  ></Banner>

      <Players
        chosenPlayers={chosenPlayers}
        isActive={isActive}
        handleIsActive={handleIsActive}
        handleChosenPlayers={handleChosenPlayers} handleDelete={handleDelete}>
      </Players>

      <div className="relative">
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
