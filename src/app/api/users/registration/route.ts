// import User from '@/lib/userModel';
// import { connectDb } from '@/lib/utils';
// import { NextResponse } from 'next/server';
// import bcrypt from 'bcrypt';

// // Function for user registration
// export async function POST(request: Request) {
//   await connectDb();

//   try {
//     const { name, email, password } = await request.json();
//     if (!name || !email || !password) {
//       return NextResponse.json({ message: 'Missing required fields' });
//     }
//     const hashPass = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashPass });
//     return NextResponse.json({
//       _id: user._id,
//       email: user.email,
//       name: user.name,
//     });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ message: 'Internal Server Error' });
//   }
// }
