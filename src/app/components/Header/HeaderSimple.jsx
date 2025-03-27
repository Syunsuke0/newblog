"use client";

import { useState } from "react";
import { Burger, Container, Group, Anchor } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./HeaderSimple.module.css";
import Link from "next/link";

const links = [
  { link: "/", label: "Home" },
  { link: "/Blog", label: "Blog" },
  { link: "/Movies", label: "Movies" },
  { link: "/Profile", label: "Profile" },
];

const HeaderSimple = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <MantineLogo size={28} />
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
