import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`

const Input = styled.input`
  background: white;
`

const CopyBtn = styled.button`
  color: white;
  background-color: black;
  margin-left: 1rem;
  font-size: 2rem;
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