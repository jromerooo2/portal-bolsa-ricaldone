import jwt_decode from "jwt-decode";

export default async (req,res) => {
    const { cookies } = req;
    const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNwb25zZUJkIjp7ImlkVXNlciI6MSwibmFtZVVzZXIiOiJqdWFucm9tZXJvIiwibWFpbFVzZXIiOiJoZWxsb2p1YW5jaG83NUBnbWFpbC5jb20iLCJSb2xzIjp7IlJvbCI6IlJvb3QifX0sImlhdCI6MTY1NDcyNDY5Mn0.1ukf8hRYEWc-S5h6l8QhuCwHnXhCGbMipKs27sALE4g';

    let decoded = jwt_decode(jwt);
    // console.log(decoded);
    res.status(200).json({ decoded })
}