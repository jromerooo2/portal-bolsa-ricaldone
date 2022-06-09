import jwt from 'jsonwebtoken'
import encrypt from '../../lib/encrypt'
import { PrismaClient } from '@prisma/client'
import { serialize } from 'cookie';


const prisma = new PrismaClient();
export default async function login(req, res) {

  const { username, password } = req.body;

  let responseBd = await prisma.userSystems.findFirst({
    where: {
      nameUser: username,
      Pword:encrypt(password)
    },
    select: {
      idUser: true,
      nameUser: true,
      mailUser: true,
      Rols: {
        select: {
          Rol: true
        }
      }
    }
  }) 

  if(responseBd !== null){

    const token = jwt.sign({
      responseBd,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
    },process.env.SECRET)

    const serialised = serialize("SacculumJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({message: "Login successful"});

  }else{
    res.status(401).send('Login Incorrecto')
  }
}
