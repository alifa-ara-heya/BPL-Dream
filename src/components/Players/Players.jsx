import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import Available from '../AvailablePlayers/Available';
import Selected from '../SelectedPlayers/Selected';

const Players = ({ handleIsActive, isActive, handleChosenPlayers, chosenPlayers, handleDelete }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('./playersData.json')
            .then(res => res.json())
            .then(data => setPlayers(data.players))
    }, [])

    return (
        <div className="w-11/12 mx-auto py-5 max-w-7xl">
            <div className="">
                {/* <h3 className="text-2xl font-medium">Available Players: {players.length}</h3> */}
                <div className="flex gap-3 justify-end items-center">
                    <button
                        onClick={() => handleIsActive('available')}
                        className=
                        {isActive.available
                            ? 'btn bg-yellow-300'
                            : 'btn bg-transparent text-gray-400'}>Available</button>
                    <button
                        onClick={() =>
                            handleIsActive('selected')}
                        className=
                        {isActive.available
                            ? 'btn bg-transparent text-gray-400' 
                            : 'btn bg-yellow-300'}>Selected {chosenPlayers.length}/6</button>
                </div>
            </div>
            {
                isActive.available
                    ? <Available players={players} handleChosenPlayers={handleChosenPlayers}
                    chosenPlayers={chosenPlayers}></Available>
                    : <Selected
                        handleDelete={handleDelete} chosenPlayers={chosenPlayers}
                        handleIsActive = {handleIsActive}
                        ></Selected>
            }

        </div>
    );
};

Players.propTypes = {
    handleIsActive: PropTypes.func.isRequired,
    isActive: PropTypes.object.isRequired,
    handleChosenPlayers: PropTypes.func.isRequired,
    chosenPlayers: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,

};

export default Players;