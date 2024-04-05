import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Innovation Accross Era</h1>
        <p className='text-gray-500 text-xs sm:text-sm text-justify'>
        ``Indian Scientists`` is a comprehensive platform dedicated to showcasing the remarkable contributions of India`s scientific pioneers from the ancient era to the modern era. Through meticulously curated content spanning various disciplines such as mathematics, astronomy, medical science, physics, chemistry, and technology, the website invites visitors to delve into captivating narratives and groundbreaking discoveries. From ancient luminaries like Aryabhata and Sushruta to modern trailblazers such as C.V. Raman and A.P.J. Abdul Kalam, ``Indian Scientist`` celebrates the enduring legacy of Indian scientific heritage. With biographical profiles, in-depth articles, and interactive features, the platform aims to inspire students, educators, and enthusiasts a like, fostering a deeper appreciation for India`s role in shaping the global scientific community. 
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}