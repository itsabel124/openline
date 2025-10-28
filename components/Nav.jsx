"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
// logo and name at homepage
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        {/* <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        /> */}
        <p className='logo_text'>Openline</p>
      </Link>

      {/* Desktop Navigation */}
      {/* it will display only on desctop devices */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              share story boy
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
          {/* display of sign in providers */}
            {/* {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))} */}
              {providers &&
          Object.values(providers).map((provider) => (
           <button
      key={provider.id}
      type="button"
      onClick={() => signIn(provider.id)}
      className={`black_btn flex items-center gap-2`}
    >
      {provider.name === "Google" && (
        <img
          src="/assets/icons/google.svg"
          // alt="Google"
          className="w-5 h-5"
        />
      )}
      {provider.name === "GitHub" && (
        <img
          src="/assets/icons/github.svg"
          // alt="GitHub"
          className="w-5 h-5"
        />
      )}
      <span>Sign in with {provider.name}</span>
    </button>
        ))}

          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <> {/* display of sign in providers */}
            {/* {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  sign in
                </button>
              ))} */}
                 {providers &&
          Object.values(providers).map((provider) => (
           <button
      key={provider.id}
      type="button"
      onClick={() => signIn(provider.id)}
      className={`black_btn flex items-center gap-2`}
    >
      {provider.name === "Google" && (
        <img
          src="/assets/icons/google.svg"
          alt="Google"
          className="w-5 h-5"
        />
      )}
      {provider.name === "GitHub" && (
        <img
          src="/assets/icons/github.svg"
          alt="GitHub"
          className="w-5 h-5"
        />
      )}
      <span>Sign in with {provider.name}</span>
    </button>
        ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
