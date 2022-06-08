import jwt from 'jsonwebtoken'
import encrypt from '../../lib/encrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
export default async function login(req, res) {


  if(!req.body){
    res.status(400).send('No data received')
    return
  }
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
  console.log(responseBd)
  if(responseBd !== null){

      res.json({
        token: jwt.sign({
          responseBd
        },process.env.JWT_SECRET)
      });

  }else{
    res.status(401).send('Login Incorrecto')
  }
}
