import { Box, Image } from "native-base";
import CoolCat from "../../assets/LandingPage.png";

export const HomeScreen = () => {
  return (
    <Box>
      <Image
        source={CoolCat}
        alt="Are you ready to get Started?"
        height="full"
        width="full"
        position="absolute"
      ></Image>
      <Box
        safeArea
        alignSelf="center"
        width="80"
        rounded="lg"
        overflow="hidden"
        borderColor="gray.700"
        borderWidth="1"
        _text={{
          fontSize: "2xl",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
        }}
        position="absolute"
        bottom="24"
        px="3"
        py="3"
        minHeight={"10"}
        alignItems="center"
      >
        Hello Manjeet
      </Box>
    </Box>
  );
};
