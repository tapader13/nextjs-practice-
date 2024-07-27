import Cart from '@/components/cart/Cart';
import { posts } from '@/lib/data';
import Image from 'next/image';
export default async function Home() {
  const demoData = {
    email: 'minhajtapader0@gmail.com',
    password: '123456',
    name: 'minu',
  };
  const userData = await fetch('http://localhost:3000/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(demoData),
  });

  // console.log(await userData.json(), 'home tab');
  return (
    <main>
      <div className=' gap-30px flex flex-row justify-between items-center px-[10px]  text-white py-6 md:px-[60px] lg:px-[80px] xl:px-[110px]'>
        <div className='w-1/2'>
          <h1 className=' text-white text-7xl font-bold tracking-tight '>
            Creative <br /> Thoughts <br /> Agency
          </h1>
          <p className=' text-white mt-10 text-xl '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            cumque quas debitis ipsum fuga ab.
          </p>
          <div className=' my-10 flex flex-row gap-5 '>
            <button className=' bg-blue-500 text-white px-5 py-3 rounded-md'>
              Learn More
            </button>{' '}
            <button className=' bg-white text-black px-5 py-3 rounded-md'>
              Contact
            </button>
          </div>
          <Image
            className=' grayscale filter'
            src='/brands.png'
            alt=''
            height={200}
            width={500}
          />
        </div>
        <div>
          <Image src='/hero.gif' alt='' height={300} width={400} />
        </div>
      </div>
      <div className='gap-30px grid grid-cols-4 items-center gap-10 px-[10px]  text-white py-6 md:px-[60px] lg:px-[80px] xl:px-[110px]'>
        {posts.map((post) => (
          <Cart key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
