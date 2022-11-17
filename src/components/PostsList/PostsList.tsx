import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { Categories } from '../Categories';
import { GrayMatter } from '../../dto';
import { Link } from '../Link';

interface PostsListProps {
  posts: GrayMatter[];
}

export const PostsList = ({ posts }: PostsListProps) => {
  return posts ? (
    <SimpleGrid columns={{ base: 1 }} spacing={6}>
      {posts.map(({ frontmatter }: any) => (
        <Box as="article" key={frontmatter.slug}>
          <Link href={`/${frontmatter.slug}`}>
            <Heading fontSize="2xl" fontWeight={500} my={2}>
              {frontmatter.title}
            </Heading>
          </Link>
          <Text as="time" fontSize="sm" dateTime={frontmatter.rawUpdated || frontmatter.rawDate}>
            {frontmatter.updated || frontmatter.date}
          </Text>
          {(frontmatter.excerpt || frontmatter.description) && (
            <Text fontSize="sm" mt={2}>
              {frontmatter.excerpt || frontmatter.description}
            </Text>
          )}
          <Categories size="sm" terms={frontmatter.terms} />
        </Box>
      ))}
    </SimpleGrid>
  ) : (
    <></>
  );
};
