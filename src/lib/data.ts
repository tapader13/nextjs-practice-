import { connectDb } from './utils';
import { unstable_noStore as noStore } from 'next/cache';
export const posts = [
  {
    id: '1',
    title: 'Hello',
    description:
      '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos natus doloremque ea quo dicta!',
  },
  {
    id: '2',
    title: 'Welcome',
    description: ' Lorem ipsum dolor sit amet consectetur adip',
  },
  {
    id: '3',
    title: 'Hello2',
    description:
      '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos natus doloremque ea quo dicta!',
  },
  {
    id: '4',
    title: 'Welcome2',
    description: ' Lorem ipsum dolor sit amet consectetur adip',
  },
];
//without database
export const getPosts = () => {
  return posts;
};
//without api call and with database
// export const getUsers = async () => {
//   noStore(); // for not chasing data
//   try {
//     connectDb();
//     const users = await User.find(); // user model must be available
//     return users;
//   } catch (error) {
//     console.log(error);
//     throw new Error('user not found');
//   }
// };
export const cards = [
  {
    title: 'Card 1',
    description: 'This is the description for card 1.',
  },
  {
    title: 'Card 2',
    description: 'This is the description for card 2.',
  },
  {
    title: 'Card 3',
    description: 'This is the description for card 3.',
  },
  {
    title: 'Card 4',
    description: 'This is the description for card 4.',
  },
];
