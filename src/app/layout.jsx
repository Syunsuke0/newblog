// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "./globals.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import HeaderSimple from "./components/Header/HeaderSimple";
import FooterSocial from "./components/Footer/FooterSocial";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ja" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <HeaderSimple />
          {children}
          <FooterSocial />
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
