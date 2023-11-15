import React from 'react'
import {Head, Link} from "@inertiajs/react";

export default function GuestWrapper({auth,children}) {
  return (
      <>
          <>
              <Head title="Emma" />
              <div className="min-h-screen landingPage bg-center bg-no-repeat bg-cover scroll-smooth">
                  <div className="w-full  p-6 flex bg-[#0004] justify-between">
                      <Link
                          href={route("dashboard")}
                          className="font-bold text-white  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                      >
                          QuicQFoods
                      </Link>
                      <div>
                          {auth?.user ? (
                              <Link
                                  href={route("dashboard")}
                                  className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                              >
                                  Dashboard
                              </Link>
                          ) : (
                              <>
                                  <Link
                                      href={route("login")}
                                      className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                  >
                                      Log in
                                  </Link>

                                  <Link
                                      href={route("register")}
                                      className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                  >
                                      Register
                                  </Link>
                              </>
                          )}
                      </div>
                  </div>

                  <div>{children}</div>

              </div>

              <style>{`
                .landingPage {
                    background-image: url("brooke-lark-M4E7X3z80PQ-unsplash.jpg");
                }

            `}</style>
          </>
      </>
  );
}
