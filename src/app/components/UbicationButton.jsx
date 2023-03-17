import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { SlLocationPin as PinIcon } from "react-icons/sl";
import OnlyBorderButton from "./OnlyBorderButton";

const UbicationButton = () => {
  return (
    <OnlyBorderButton p={1}>
      <HStack spacing={1}>
        <Icon as={PinIcon} w={6} h={8} color="blackAlpha.600" />
        <VStack spacing={0} align="start">
          <Text fontSize="xs" fontWeight="100">
            Enviar a
          </Text>
          <Text fontSize="sm" fontWeight="400">
            Capital Federal
          </Text>
        </VStack>
      </HStack>
    </OnlyBorderButton>
  );
};

export default UbicationButton;
