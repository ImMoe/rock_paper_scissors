import styled from "styled-components"

import Rock from "../assets/rock.png"
import Paper from "../assets/paper.png"
import Scissor from "../assets/scissor.png"

const PlayerOptions = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;

    & img {
        opacity: 0.6;
    }

    & img:hover {
        opacity: 1;
        transform: translateY(-10px);
        transition: all 300ms ease;
    }
`

const Options = ({ playerChoice }) => {
  return (
    <PlayerOptions>
        <img src={Rock} alt="Rock icon" width="100" height="100" onClick={() => playerChoice("rock")} />
        <img src={Paper} alt="Paper icon" width="100" height="100" onClick={() => playerChoice("paper")} />
        <img src={Scissor} alt="Scissors icon" width="100" height="100" onClick={() => playerChoice("scissors")} />
    </PlayerOptions>
  )
}

export default Options