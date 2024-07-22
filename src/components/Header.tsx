import React from 'react'
import styled from 'styled-components'

// PC表示だと黒
// モバイルだと#FFE6E6(背景色と同じ)
const Wrapper = styled.header`
  background: black;
  @media (max-width: 800px) {
    background: #FFE6E6;
    padding: 1rem 0;
  }
`

// モバイル表示だと黒
const Title = styled.a`
  color: white;
  font-size: 2rem;
  text-decoration: none;
  @media (max-width: 800px) {
    color: black;
    font-size: 3rem;
  }
`

const Header = () => {
  return (
    <Wrapper>
      <Title href='https://homemade-apps.vercel.app/' target='blank'>DATEジェネレーター</Title>
    </Wrapper>
  )
}

export default Header