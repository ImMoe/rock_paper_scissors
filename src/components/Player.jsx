import styled from "styled-components"
import Rock from "../assets/rock.png"
import Paper from "../assets/paper.png"
import Scissor from "../assets/scissor.png"

const PlayerSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PlayerMove = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  gap: 2rem;

  & img {
    width: 200px;
    height: 200px;
  }
`

const choiceImg = (name) => {
  switch (name) {
    case "rock":
      return Rock;
    case "paper":
      return Paper;
    case "scissors": 
      return Scissor;
    default:
      return Rock;
  }
}

const Player = ({ name, data }) => {
  return (
    <PlayerSide>
      <PlayerMove>
        <h1>{name}</h1>
        <img src={choiceImg(data.name)} alt="Icon" />
        <div></div>
      </PlayerMove>
    </PlayerSide>
  )
}

export default Player