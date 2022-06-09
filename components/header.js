import Link from 'next/link'
import axios from 'axios';

function Header() {
  const user = true;
  console.log(user);

  const handleLogout = async () => {
    const logout = await axios.get("/api/logout");
    window.location.href = "/";
    console.log(logout);
  }
  return (
    <header>
      <nav className="font-bold">        
        <ul>         
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
                    <li>
                      <Link href="/advanced/profiles">
                        <a>Perfiles</a>
                      </Link>
                    </li>

          <li>
            <Link href="/about">
              <a>Sobre Nosotros</a>
            </Link>
          </li>
          {
          
            (user  ? (
              
              <>
                <li>
                  <a className='cursor-pointer' onClick={() => handleLogout()} >Cerrar Sesión</a>
                </li>
              </>
            ) : (
              <li>
                {/* <a href="/api/login">Iniciar Sesión</a> */}
              </li>
            ))}
        </ul>
      </nav>

      <style jsx>{`
        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
        nav {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        li:nth-child(2) {
          margin-right: auto;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        button {
          font-size: 1rem;
          color: #fff;
          cursor: pointer;
          border: none;
          background: none;
        }
      `}</style>
    </header>
  )
}

export default Header
