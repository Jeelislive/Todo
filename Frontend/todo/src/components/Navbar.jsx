import React from 'react'
import { Link, useLocation } from 'react-router-dom';   

function Navbar() {
    const location = useLocation();

  return (
    <div>
          <nav className="bg-gray-800 py-4">
              <div className="container mx-auto px-4">
                  <div className="flex justify-between items-center">
                      <div className="flex items-center">
                          <Link to="/" className="text-white mr-4">
                              Home
                          </Link>
                          
                      </div>
                      <div>
                         
                          { location.pathname === '/' && (
                              <>
                                  <Link to="/signup" className="text-white mr-4">
                                      Signup
                                  </Link>
                                  <Link to="/login" className="text-white mr-4">
                                      Login
                                  </Link>
                              </>
                          ) }
                          { location.pathname === '/todo' && (
                              <Link to="" className="text-white mr-4">
                                  Logout
                              </Link>
                          ) }
                      </div>

                  </div>
              </div>
          </nav>
    </div>
  )
}

export default Navbar
