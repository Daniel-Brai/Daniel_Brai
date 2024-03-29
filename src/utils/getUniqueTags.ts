import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getUniqueTags = (posts: CollectionEntry<"posts">[]) => {
  let tags: string[] = [];
  const filteredPosts = posts.filter(({ data }) => !data.isDraft);
  filteredPosts.forEach(post => {
    tags = [...tags, ...post.data.tags]
      .map(tag => slugifyStr(tag))
      .filter(
        (value: string, index: number, self: string[]) =>
          self.indexOf(value) === index
      );
  });
  return tags;
};

export default getUniqueTags;
