import jwt_decode from "jwt-decode";

export default async (req,res) => {
    const { cookies } = req;

    const jwt = cookies.SacculumJWT;
    const decoded = jwt_decode(jwt);
    if (!jwt) {
      return res.json({ message: "Invalid token!" });
    }
  
    return res.status(200).json({ data:decoded });
}