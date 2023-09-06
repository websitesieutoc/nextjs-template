import type { ReactNode } from 'react';
import { CustomHead } from '../CustomHead';
import { Navbar } from '../Navbar';
import { Container, Flex } from '@chakra-ui/react';

export type GeneralLayoutProps = {
  centerContent?: boolean;
  showNavbar?: boolean;
  children: ReactNode;
};

export const GeneralLayout = ({
  centerContent = false,
  showNavbar = true,
  children,
}: GeneralLayoutProps) => {
  return (
    <>
      <CustomHead
        title="Nextjs Template"
        description="Strong opinionated starter template"
      />
      <Container maxW="container.lg" centerContent={centerContent}>
        <Flex
          direction="column"
          justifyContent="space-between"
          height="100vh"
          paddingTop="6"
        >
          {showNavbar && <Navbar />}

          <Flex
            direction="column"
            maxWidth="100vw"
            paddingTop={8}
            height="100%"
            as="main"
          >
            {children}
          </Flex>
        </Flex>
      </Container>
    </>
  );
};
