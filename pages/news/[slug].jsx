import { useRouter } from 'next/router';

const SinglePost = () => {
  const router = useRouter();
  return (
    <div>This contains all the things related to a single post of the url: {router.query.slug}</div>
  );
};

export default SinglePost;
