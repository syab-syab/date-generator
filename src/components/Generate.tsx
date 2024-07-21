import React from 'react'
import styled from 'styled-components'
import GeneratedInput from './GeneratedInput'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  @media (max-width: 800px) {
    display: block;
  }
`

const Item = styled.div`
  display: block;
  border: green 0.1rem solid;
`



type Props = {
  year: string,
  month: string,
  day: string
}

const Generate = (props: Props) => {
  const slashDate = (val: string[]): string => {
    return `${val[0]}/${val[1]}/${val[2]}`
  }

  const hyphenDate = (val: string[]): string => {
    return `${val[0]}-${val[1]}-${val[2]}`
  }

  const periodDate = (val: string[]): string => {
    return `${val[0]}.${val[1]}.${val[2]}`
  }

  // 年を下二桁にする
  const lastTwoDigitsYear = (val: string): string => {
    const tmp: string[] = Array.from(val)
    tmp.splice(0, 2)
    const year: string = tmp.join("")
    return year
  }

  // last two digits = 下二桁


  return (
    <Wrapper>
      <Item>
        <p>年・月・日</p>
        <div>
          <GeneratedInput date={slashDate([props.year, props.month, props.day])} />
          <GeneratedInput date={hyphenDate([props.year, props.month, props.day])} />
          <GeneratedInput date={periodDate([props.year, props.month, props.day])} />
        </div>
      </Item>
      <Item>
        <p>月・日・年</p>
        <div>
          <GeneratedInput date={slashDate([props.month, props.day, props.year])} />
          <GeneratedInput date={slashDate([props.month, props.day, lastTwoDigitsYear(props.year)])} />
          <GeneratedInput date={hyphenDate([props.month, props.day, props.year])} />
          <GeneratedInput date={hyphenDate([props.month, props.day, lastTwoDigitsYear(props.year)])} />
          <GeneratedInput date={periodDate([props.month, props.day, props.year])} />
          <GeneratedInput date={periodDate([props.month, props.day, lastTwoDigitsYear(props.year)])} />
        </div>
      </Item>
      <Item>
        <p>日・月・年</p>
        <div>
          <GeneratedInput date={slashDate([props.day, props.month, props.year])} />
          <GeneratedInput date={slashDate([props.day, props.month, lastTwoDigitsYear(props.year)])} />
          <GeneratedInput date={hyphenDate([props.day, props.month, props.year])} />
          <GeneratedInput date={hyphenDate([props.day, props.month, lastTwoDigitsYear(props.year)])} />
          <GeneratedInput date={periodDate([props.day, props.month, props.year])} />
          <GeneratedInput date={periodDate([props.day, props.month, lastTwoDigitsYear(props.year)])} />
        </div>
      </Item>
    </Wrapper>
  )
}

export default Generate