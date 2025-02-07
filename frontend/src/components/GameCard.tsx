import { Box, Heading } from "@chakra-ui/react"

type props = {
    id: string
  }  

const GameCard = (props: props) => {
    return (
        <Box>
           <Heading>
            {props.id}
            </Heading> 
        </Box>
    )
}

export default GameCard