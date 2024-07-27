import { handleLogout } from '@/actions/user';

export const Logout = async () => {
  return (
    <div>
      <form action={handleLogout}>
        <button className='py-1 px-3 bg-white text-black'>Logout</button>
      </form>
    </div>
  );
};
