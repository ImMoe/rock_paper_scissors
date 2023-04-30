import styled from "styled-components"

const PageSpinner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(42, 23, 45, 1);
    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TheSpinner = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid #fff;
  border-radius: 50%;
  border-bottom: none;
  animation: spin 500ms linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Spinner = () => {
  return (
    <PageSpinner>
      <TheSpinner />
    </PageSpinner>
  )
}

export default Spinner