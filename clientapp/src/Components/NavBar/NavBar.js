import { Box, Container, Heading } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Container maxWidth={'100%'} height='60px' margin={0} bgColor='#4361ee'>
      <Box left={true} width='100%'>
        <Heading as='h1' size='lg' pt={2} color='white'>
          DocumentDaddy
        </Heading>
      </Box>
    </Container>
  )
}