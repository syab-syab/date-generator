import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`

const Input = styled.input`
  background: white;
  font-size: 2rem;
`

const CopyBtn = styled.button`
  background-color: #E1AFD1;
  margin-left: 1rem;
  font-size: 2rem;
    &:hover {
    cursor: pointer;
    color: white;
  }
`

type Props = {
  date: string
}

const GeneratedInput = (props: Props) => {
  const copyDate = (val: string): void => {
    navigator.clipboard.writeText(val)
  }
  return (
    <Wrapper>
      <Input readOnly type='text' value={props.date} />
      <CopyBtn onClick={() => copyDate(props.date)}>Copy</CopyBtn>
    </Wrapper>
  )
}

export default GeneratedInput