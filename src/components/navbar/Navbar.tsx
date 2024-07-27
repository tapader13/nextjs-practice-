import { getSession } from '@/lib/getSession';
import Links from './Links';
import { Logout } from '../Logout';

const Navbar = async () => {
  const ses = await getSession();
  const user = ses?.user;

  return (
    <div>
      <div className=' flex flex-row justify-between items-center px-[10px]  text-white py-5 md:px-[60px] lg:px-[80px] xl:px-[110px]'>
        <div>
          <h1 className=' text-2xl capitalize tracking-wider font-bold'>
            minhaj
          </h1>
        </div>
        <div className=' flex flex-row'>
          <Links user={user} />
          {user && <Logout />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
