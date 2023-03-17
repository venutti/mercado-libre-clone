import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { IoIosSearch as SearchIcon } from "react-icons/io";

const stylesDivider = {
  w: "1px",
  h: "60%",
  bgColor: "blackAlpha.300",
  position: "relative",
  top: "0",
  left: "-10px",
};

const SearchBar = () => {
  return (
    <InputGroup>
      <Input
        variant="filled"
        borderWidth={1}
        placeholder="Buscar productos, marcas y más..."
      />
      <InputRightElement>
        <Box sx={stylesDivider} />
        <Icon as={SearchIcon} boxSize={5} color="blackAlpha.500" />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
