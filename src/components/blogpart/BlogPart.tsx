import Image from 'next/image';
import Link from 'next/link';
type postType = {
  post: {
    id: string;
    title: string;
    description: string;
  };
};
const BlogPart = ({ post }: postType) => {
  return (
    <div className=' w-[30%]'>
      <div className=' flex flex-row'>
        <Image alt='' src='/noavatar.png' height={400} width={300} />
        <span className='  text-orange-500 m-auto rotate-[270deg] relative right-0 h-8'>
          7/20/2024
        </span>
      </div>

      <div>
        <h1 className=' text-white font-bold my-3'>{post.title}</h1>
        <p className=' text-white'>{post.description}</p>
        <Link className=' text-white' href={`/blog/${post.id}`}>
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default BlogPart;
