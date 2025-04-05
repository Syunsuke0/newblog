import {
  IconBrandInstagram,
  IconBrandTwitter,
  // IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group } from "@mantine/core";
import classes from "./FooterSocial.module.css";
// import Logo from "../../../assets/syunblog.svg";
import Logo2 from "../../../assets/syunblog2.png";
import Image from "next/image";

const FooterSocial = () => {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image
          className="rounded-full "
          src={Logo2}
          width={46}
          height={46}
          alt="FooterImage"
        />
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            href="https://x.com/syun_Bass_"
            component="a"
            size="lg"
            color="gray"
            variant="subtle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandTwitter component="a" size={18} stroke={1.5} />
          </ActionIcon>
          {/* <ActionIcon
            component="a"
            href=""
            size="lg"
            color="gray"
            variant="subtle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon> */}
          {/* <ActionIcon
            href="https://www.instagram.com/say__vibes/"
            component="a"
            size="lg"
            color="gray"
            variant="subtle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon> */}
        </Group>
      </Container>
    </div>
  );
};

export default FooterSocial;
