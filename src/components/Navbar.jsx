
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";



const Navbar = async () => {

  const { isAuthenticated } = getKindeServerSession();

  const isAuth = await isAuthenticated();




  const navItems = <>
    <li><Link href="/">Home</Link></li>
    <li>
      {isAuth ? (
        <Link href='/profile'>Profile</Link>
      ) : (
        <LoginLink>Profile</LoginLink>
      )}
    </li>


  </>
  return (
    <div className="bg-base-100 sticky top-0 z-[1000] shadow-lg">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <Link href='/' className="text-xl font-bold">TheDailyMuse</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end gap-2">

          {
            !isAuth ? <>
              <LoginLink>

                <p className="btn btn-primary">Login</p>
              </LoginLink>
              <RegisterLink>

                <p className="btn btn-secondary">Sign Up</p>
              </RegisterLink>
            </> : <>
              <LogoutLink>
                <p className="btn btn-error">Logout</p>
              </LogoutLink>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar