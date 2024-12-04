import "./Player.css"
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { BiSolidPencil } from "react-icons/bi";
import EditModal from "../EditModal";
import Forms from "../Forms";

const Player = ({ playerInfo, metricInfo, headerColor, rankingPosition, onDelete, onUpdate }) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const updateAndCloseModal = (player) => {
        onUpdate(player)
        closeModal()
    }

    const positionLabel = {
        "goalkeeper": "Goleiro",
        "defender": "Zagueiro",
        "midfielder": "Meio-campo",
        "forward": "Atacante"
    }[playerInfo.position]

    return (
        <div>
            <div className="player">
                <BiSolidPencil size={28} className="edit-player" onClick={openModal} />
                <FaTrash size={25} className="delete-player" onClick={() => onDelete(playerInfo.id)} />
                <p className="ranking-position"> { rankingPosition + 1 }º </p>
                <div className="playerHeader" style={{ backgroundColor: headerColor }}>
                    <img src={playerInfo.image_url} alt="foto do jogador" />
                </div>

                <div className="playerFooter">
                    <h4>{playerInfo.name}</h4>
                    <h4>{positionLabel}</h4>
                    <h5>{metricInfo[0]} {metricInfo[1]}</h5>
                </div>
            </div>
            <EditModal isVisible={isModalVisible}>
                <Forms onFormsSubmit={player => updateAndCloseModal(player)} action="update" onClose={closeModal} currentValues={playerInfo} />
            </EditModal>
        </div>   
    )
}

export default Player;