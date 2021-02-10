import { Box, Flex, Heading, Link, Spacer } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import ThemeToggle from '../theme-toggle'

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <Box as="header" background="rebeccapurple" marginBottom="1.45rem">
    <Box as="div" m="0 auto" maxW="960px" p="1.45rem 1.0875rem">
      <Flex>
        <Heading margin="0">
          <Link as={GatsbyLink} to="/" color="white" _hover={{ textDecor: 'none' }}>
            {siteTitle}
          </Link>
        </Heading>
        <Spacer />
        <Box as="div" position="relative">
          <ThemeToggle />
        </Box>
      </Flex>
    </Box>
  </Box>
)

export default Header
