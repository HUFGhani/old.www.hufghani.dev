import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import SEO from '../components/seo'

const NotFoundPage: React.FC = () => (
  <>
    <SEO pageTitle="404: Not found" />
    <Heading>Woops, something went wrong.</Heading>
    <Text fontSize="xl" my={5}>
      This page does not exist or is no longer reachable.
    </Text>
  </>
)

export default NotFoundPage
