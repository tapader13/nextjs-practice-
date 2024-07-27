import React from 'react';

const BlogDetails = ({
  params,
  searchParams,
}: {
  params: { blogId: string };
  searchParams: { q: string };
}) => {
  console.log(params.blogId);
  console.log(searchParams.q);
  return <div className=' text-white'>BlogDetails page</div>;
};

export default BlogDetails;
