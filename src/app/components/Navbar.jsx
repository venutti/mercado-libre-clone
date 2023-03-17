import { Box, HStack, Image, Icon, Link, VStack } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import UbicationButton from "./UbicationButton";

import { BsCart2 as CartIcon } from "react-icons/bs";
import logo from "../../assets/logo.png";

const navLinks = [
  { label: "Categorías" },
  { label: "Ofertas" },
  { label: "Historial" },
  { label: "Supermercado" },
  { label: "Moda" },
  { label: "Vender" },
  { label: "Ayuda" },
];

const userLinks = [
  { label: "Creá tu cuenta", to: "/create" },
  { label: "Ingresá", to: "/login" },
  { label: "Mis compras", to: "/history" },
  { label: <Icon as={CartIcon} boxSize={5} />, to: "/cart" },
];

const Navbar = () => {
  const renderedNavLinks = navLinks.map((link) => (
    <Link key={link.label} variant="unstyled" fontSize="sm">
      {link.label}
    </Link>
  ));

  const renderedUserLinks = userLinks.map((link) => (
    <Link key={link.to} fontSize="sm" colorScheme="black">
      {link.label}
    </Link>
  ));

  return (
    <VStack
      bgColor="primary.500"
      align="start"
      px={14}
      pt={2}
      pb={3}
      shadow
      borderBottom="1px solid"
      borderBottomColor="blackAlpha.300"
      spacing={1}
    >
      <HStack spacing={14} w="full">
        <Image src={logo} />
        <Box w="full" maxW="xl">
          <SearchBar />
        </Box>
        <Image
          w="340px"
          src="https://http2.mlstatic.com/D_NQ_773701-MLA54334638216_032023-OO.webp"
        />
      </HStack>
      <HStack spacing={14} w="full" align="end">
        <UbicationButton />
        <HStack spacing={4}>{renderedNavLinks}</HStack>
        <HStack spacing={6} flexGrow={1} justify="end" align="end">
          {renderedUserLinks}
        </HStack>
      </HStack>
    </VStack>
  );
};

export default Navbar;
