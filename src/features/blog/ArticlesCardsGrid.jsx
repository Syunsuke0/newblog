import {
  AspectRatio,
  Card,
  Container,
  Image,
  SimpleGrid,
  Text,
} from "@mantine/core";
import classes from "./ArticlesCardsGrid.module.css";
import dayjs from "dayjs";

const ArticlesCardsGrid = ({ posts }) => {
  const cards = posts.map((article) => {
    const formattedDate = dayjs(article.publishedAt).format("YY.MM.DD");
    return (
      <Card
        key={article.title}
        p="md"
        radius="md"
        component="a"
        href={`/Blog/${article.id}`}
        className={classes.card}
      >
        <AspectRatio ratio={1920 / 1080}>
          <Image src={article.image.url} radius="md" />
        </AspectRatio>
        <Text className={classes.date}>{formattedDate}</Text>
        <Text className={classes.title}>{article.title}</Text>
      </Card>
    );
  });

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: 0, sm: "md" }}>
        {cards}
      </SimpleGrid>
    </Container>
  );
};

export default ArticlesCardsGrid;
