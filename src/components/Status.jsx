import styled from "styled-components"

const CurrentStatus = styled.div`
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
    position: relative;
    top: 3rem;
    color: #fff;
`

const Status = ({ result }) => {
  return (
    <CurrentStatus>
      {result || "Make your move"}!
    </CurrentStatus>
  )
}

export default Status