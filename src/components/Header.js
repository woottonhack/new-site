import React from 'react'
import Logo from './Logo'
import Bar from './Bar'
import {
  Box,
  Flex,
  Text,
  Heading,
  Link,
  Button,
  Badge,
  colors
} from '@hackclub/design-system'
import Calendar from './Calendar'
import data from '../data.json'

const Header = () => (
  <Box pt={[4, 5]}>
     <img src={data.logo} alt="Logo" style={{width: 75}} />
    <Flex align="center" mb={3} wrap>
      <Link href="https://hackclub.com" mr={3}>
        <Heading.h1 color="primary" f={6}>
          Hack Club
        </Heading.h1>
      </Link>
      <Badge>Wootton High School</Badge>
    </Flex>
    <Text f={[3, 4]}>{data.description}</Text>
    <Button
      bg="primary"
      color="white"
      mt={3}
      mb={4}
      href="https://airtable.com/shrBU3X26Pczwp6D9"
      target="_blank"
      children="Sign Up"
    />
    <Flex align="center">
      <Calendar month={data.meeting.month} day={data.meeting.day} />
      <Box align="left" ml={3}>
        <Text>
          <strong>Next meeting</strong>
          <Link
            href="http://rmd.at/whs-hack"
            target="_blank"
            style={{ fontSize: 14, fontStyle: 'italic' }}
            children={' — want a reminder?'}
          />
        </Text>
        <Text>262, 2:30–4:00pm</Text>
      </Box>
    </Flex>
  </Box>
)

export default Header
