import PropTypes from 'prop-types';
import Player from '../Player/Player';

const Available = ({players, handleChosenPlayers, chosenPlayers}) => {
    return (
        
        <div>
            <h3 className="text-2xl font-medium pt-7">Available Players: {players.length}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 py-7 gap-4 md:pb-48">
            
                    {
                        players.map(player =>
                            <Player 
                            key={player.id} 
                            player={player} handleChosenPlayers={handleChosenPlayers}
                            chosenPlayers = {chosenPlayers} ></Player>
                        )
                    }
                </div>
        </div>
    );
};

Available.propTypes = {
    players: PropTypes.array.isRequired,
    handleChosenPlayers: PropTypes.func.isRequired,
    chosenPlayers: PropTypes.array.isRequired
};

export default Available;