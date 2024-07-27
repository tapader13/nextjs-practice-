import BlogPart from '@/components/blogpart/BlogPart';
import { getPosts } from '@/lib/data';
// export const generateMetaData = async () => {
//   const posts = await getPosts();
//   console.log(posts);
//   return { title: posts[0].title, description: posts[0].description };
// }; here dynamic metadata cant created.

const BlogPage = async () => {
  const posts = await getPosts();
  // console.log(posts);
  return (
    <div className=' mx-[110px] flex flex-row justify-between flex-wrap gap-10 my-5'>
      {posts.map((post, i) => (
        <BlogPart key={i} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;
