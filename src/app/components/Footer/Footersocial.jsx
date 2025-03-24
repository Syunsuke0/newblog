import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./FooterSocial.module.css";
import Link from "next/link";

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <MantineLogo size={28} />
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            component="a"
            href="https://x.com/syun_Bass_"
            size="lg"
            color="gray"
            variant="subtle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandTwitter size={18} stroke={1.5} />{" "}
          </ActionIcon>

          {/* <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon> */}

          <ActionIcon
            component="a"
            href="https://www.instagram.com/say__vibes/"
            size="lg"
            color="gray"
            variant="subtle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
