import { Button } from "@chakra-ui/react";

const stylesButton = {
  borderColor: "transparent",
  _hover: {
    borderColor: "blackAlpha.300",
  },
  _focus: {
    borderColor: "blackAlpha.300",
  },
};

const OnlyBorderButton = ({ ...props }) => {
  return <Button variant="outline" sx={stylesButton} {...props} />;
};

export default OnlyBorderButton;
