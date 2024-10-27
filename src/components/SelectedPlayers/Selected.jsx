import PropTypes from 'prop-types';
import { MdDeleteForever } from "react-icons/md";

const Selected = ({ chosenPlayers, handleDelete, handleIsActive }) => {

    return (
        <div className='space-y-4 py-6'>

            <p className="text-2xl font-medium">Selected Players: ({chosenPlayers.length}/6)</p>

            {chosenPlayers.length === 0
                ? (<div className='md:min-h-[400px] flex items-center justify-center'>
                    <p className='text-gray-500 font-bold'>No players selected yet.</p>
                </div>)
                : (
                    <div className='md:pb-80 space-y-4'>
                        {chosenPlayers.map((player, idx) => (
                            <div key={idx}>
                                <div className='flex items-center justify-between gap-4 border p-4 rounded-lg'>
                                    <div className='flex items-center gap-4'>
                                        <img className='w-20 h-20 rounded-lg object-cover' src={player.image} alt={player.name} />
                                        <div>
                                            <h3 className='font-bold'>{player.name}</h3>
                                            <p>{player.battingType}</p>
                                            <p>{player.role}</p>
                                            <p className='font-medium'>Price: {player.biddingPrice}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleDelete(player.id)} className='text-red-400 text-3xl'><MdDeleteForever /></button>
                                </div>
                            </div>
                        ))}
                        <button onClick={()=> handleIsActive('available')} className='btn bg-yellow-400' >Add More Player</button>
                        

                    </div>
                )
            }

        </div>
    );
};


Selected.propTypes = {
    chosenPlayers: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleIsActive: PropTypes.func.isRequired,

};

export default Selected;