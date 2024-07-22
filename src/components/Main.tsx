import React, { useState } from 'react'
import Generate from './Generate'
import styled from 'styled-components'

const Wrapper = styled.main`
  font-size: 3rem;
  background: #FFE6E6;
  height:auto;
  padding: 1rem 0 2rem;
`

const FormWrapper = styled.div`
  padding: 4rem 0;
  @media (max-width: 800px) {
    display: block;
  }
`

const InputWrapper = styled.div`
  margin: 1rem 0;
`

const Input = styled.input`
  background: white;
  font-size: 2rem;
  margin-left: 1rem;
`

const Main = () => {
  const date = new Date()

  const [year, setYear] = useState<string>(String(date.getFullYear()))
  const [month, setMonth] = useState<string>(String(date.getMonth() + 1))
  const [day, setDay] = useState<string>(String(date.getDate()))

  const onChangeYear = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.length <= 4 && Number(e.target.value) > 0) {
      setYear(String(e.target.value))
    }
  }
  
  const onChangeMonth = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.length <= 2 && Number(e.target.value) > 0) {
      setMonth(String(e.target.value))
    }
  }
  
  const onChangeDay = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.length <= 2 && Number(e.target.value) > 0) {
      setDay(String(e.target.value))
    }
  }



  return (
    <Wrapper>
      <FormWrapper>
        {/* 4桁まで */}
        <InputWrapper>
          <Input type='number' value={Number(year)} onChange={onChangeYear} />年
        </InputWrapper>
        {/* 2桁まで */}
        <InputWrapper>
          <Input type='number' value={Number(month)} onChange={onChangeMonth} />月
        </InputWrapper>
        {/* 2桁まで */}
        <InputWrapper>
          <Input type='number' value={Number(day)} onChange={onChangeDay} />日
        </InputWrapper>
      </FormWrapper>
      <Generate year={year} month={month} day={day} />
    </Wrapper>
  )
}

export default Main