import PropTypes from 'prop-types';
import { FaUserAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const Player = ({ player, handleChosenPlayers, chosenPlayers }) => {
    const { name, country, image, role, battingType, bowlingType, biddingPrice, id } = player;

    //check if the player is selected, so that we can disable the btn afterwards.

    const isPlayerSelected = chosenPlayers.some(p => p.id === id); //some method returns a boolean value, while find method will return the entire object here.

    return (
        <div className='p-4 border rounded-xl'>
            <img src={image} alt="" className='h-[240px] object-cover w-full rounded-xl' />
            <div className='space-y-3 pt-3'>
                <div className='flex items-center gap-3'><FaUserAlt />{name}
                </div>

                <div className='flex justify-between items-center'>
                    <span className='flex items-center gap-3'>
                        <FaFlag /> {country}
                    </span>
                    <span className='bg-slate-100 px-3 py-2 rounded-md text-sm'>{role}</span>
                </div>

                <div className='flex justify-between items-center'>
                    <p className='font-semibold'>Batting Type: </p>
                    <p>{battingType}</p>
                </div>

                <div className='flex justify-between items-center'>
                    <p className='font-semibold'>Bowling Type: </p>
                    <p> {bowlingType} </p>
                </div>

                <div className='flex items-center justify-between'>
                    <p className='font-semibold'>Price: {biddingPrice}</p>


                    <button onClick={() => handleChosenPlayers(player)} className='btn text-sm'
                        disabled={isPlayerSelected}
                    >
                        {isPlayerSelected
                            ? 'Player Selected'
                            : 'Choose Player'}
                    </button>
                </div>
            </div>

        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleChosenPlayers: PropTypes.func.isRequired,
    chosenPlayers: PropTypes.array
};

export default Player;