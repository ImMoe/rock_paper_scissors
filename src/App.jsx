import { useState } from "react"
import axios from "axios"

import styled from "styled-components"

import Player from "./components/Player"
import Options from "./components/Options"
import Status from "./components/Status"
import Spinner from "./components/Spinner"

const options = {
  method: 'GET',
  url: 'https://rock-paper-scissors13.p.rapidapi.com/',
  params: { choice: "" },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '6053c08c06msh07036f3f487a5b3p163f5djsn1ecf3509cbcd',
    'X-RapidAPI-Host': 'rock-paper-scissors13.p.rapidapi.com'
  }
};

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  transform: translateY(-100px);
`

const App = () => {
  const [result, setResult] = useState("")
  const [user, setUser] = useState({})
  const [ai, setAi] = useState({})
  const [loading, setLoading] = useState(false)

  async function play(playerChoose) {
    const updatedOptions = {...options, params: { choice: playerChoose }}
    try {
      setLoading(true);
      const response = await axios.request(updatedOptions);
      setUser(response.data.user)
      setAi(response.data.ai)
      setResult(response.data.result)
      setTimeout(() => {
        setLoading(false);
      }, 600);
    } catch (error) {
      console.error(error);
    }
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <>
     <Status result={result} />
      <Container>
        <Player name="YOU" data={user} />
        <Player name="COMPUTER" data={ai} />
      </Container>
      <Options playerChoice={(playerChoose) => play(playerChoose)} />
    </>
  )
}

export default App