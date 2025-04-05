"use client";

import { Burger, Container, Group, Anchor } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import Logo from "../../../assets/syunblog.svg";
import Logo2 from "../../../assets/syunblog2.png";

import Image from "next/image";

const links = [
  { link: "/", label: "Home" },
  { link: "/Blog", label: "Blog" },
  // { link: "/Movies", label: "Movies" },
  { link: "/FavMusic", label: "FavMusic" },
  { link: "/Profile", label: "Profile" },
];

const HeaderSimple = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const pathname = usePathname();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={pathname === link.link || undefined}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Image
            className=" rounded-full"
            src={Logo2}
            width={46}
            height={46}
            alt="HeaderImage"
          />
        </Link>

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};

export default HeaderSimple;
