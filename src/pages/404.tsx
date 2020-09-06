import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import YadonImg from '../assets/img/404.svg'
import YadonTextImg from '../assets/img/404-text.svg'
import IndexLayout from '../layouts'
import { Flexbox, View } from '../lib/view'

const NotFoundPage = () => (
  <IndexLayout>
    <Flexbox backgroundColor="#EBBBC4" height="100vh" overflowY="hidden" justifyContent="center" alignItems="center">
      <View position="relative" maxWidth="1200px" maxHeight="800px" height="inherit" width="100%">
        <Yadon />
        <YadonText />
      </View>
      <View position="fixed" right="45px" bottom="30px">
        <Link to="/">HOME -></Link>
      </View>
    </Flexbox>
  </IndexLayout>
)

const Yadon = styled.div({
  position: 'absolute',
  width: '894.91px',
  height: '864px',
  left: '-29.23px',
  top: '-32px',
  backgroundImage: `url(${YadonImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
})

const YadonText = styled.div({
  position: 'absolute',
  left: '768px',
  top: '346px',
  width: '454px',
  height: '246px',
  backgroundImage: `url(${YadonTextImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
})

export default NotFoundPage
