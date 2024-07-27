// import User from '@/lib/userModel';
// import { connectDb } from '@/lib/utils';
// import { NextResponse } from 'next/server';
// import bcrypt from 'bcrypt';
// // Function for user login
// export async function POST(request: Request) {
//   await connectDb();

//   try {
//     const { email, password } = await request.json();

//     if (!email || !password) {
//       return NextResponse.json({ message: 'Missing required fields' });
//     }
//     const user = await User.findOne({ email });
//     if (!user) {
//       return NextResponse.json({ message: 'Invalid email or password' });
//     }
//     const matchPass = await bcrypt.compare(password, user.password);
//     if (!matchPass) {
//       return NextResponse.json({ message: 'Invalid email or password' });
//     }

//     return NextResponse.json({
//       _id: user._id,
//       email: user.email,
//       name: user.name,
//     });
//   } catch (error) {
//     // Typo fixed here
//     console.error(error);
//     return NextResponse.json({ message: 'Internal Server Error' });
//   }
// }
