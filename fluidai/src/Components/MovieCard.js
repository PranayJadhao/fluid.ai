import {
  Button,
  Image,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

const MovieCard = ({ prop }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      id="outerBox"
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      p={4}
      mb={4}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
    >
      <Image
        id="image"
        boxSize={{ base: "100%", md: "150px" }}
        objectFit="cover"
        src={prop.Poster}
        alt="Poster Not Found"
        mx="auto" // Center align the image
        mb={{ base: 4, md: 0 }}
        cursor="pointer"
        onClick={onOpen}
      />
      <Box flex="1">
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          {prop.Title}
        </Text>
        <Text fontSize="md" mb={2}>
          <b>Director:</b> {prop.Director}
        </Text>
        <Text fontSize="md" mb={2}>
          <b>Year:</b> {prop.Year}
        </Text>
        <Button id="moreButton" mt={2} onClick={onOpen} colorScheme="blue">
          See More
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{prop.Title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image
                src={prop.Poster}
                alt="Poster Not Found"
                mb={4}
                mx="auto" // Center align the image
              />
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                <b>Director:</b> {prop.Director}
              </Text>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                <b>Type:</b> {prop.Type}
              </Text>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                <b>Year:</b> {prop.Year}
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default MovieCard;
