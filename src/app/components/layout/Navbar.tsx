'use client'
import Image from "next/image"
import { useState } from 'react'
import ArrowDown from '/public/icon-arrow-down.svg'
import ArrowUp from '/public/icon-arrow-up.svg'
import Calendar from '/public/icon-calendar.svg'
import CloseMenu from '/public/icon-close-menu.svg'
import menuOpen from '/public/icon-menu.svg'
import Planning from '/public/icon-planning.svg'
import Reminders from '/public/icon-reminders.svg'
import IconTodo from '/public/icon-todo.svg'
import Snap from '/public/logo.svg'
const Navbar = () => {
  
  const [ menu, setMenu ] = useState<boolean>(false)
  const [ setaFeatures, setSetaFeatures ] = useState<boolean>(false)
  const [ setaCompany, setSetaCompany ] = useState<boolean>(false)
  
  return (
    <nav className="  fixed top-0 left-0 right-0 h-20 z-0 bg-white  w-full flex justify-between ">
        <Image
            src={Snap}
            height={30}
            width={50}

            
            alt="logo"
            className="w-14 h-5 mt-8 ml-5 flex items-center justify-start "
            />

        <button onClick={() => setMenu(!menu)}
        className="fixed right-4  top-6 md:hidden">
          {!menu ? (
            <Image
              src={menuOpen}
              height={30}
              width={50}
              alt="menu-open"
              className="  h-6 w-8  fixed right-4  top-6"
                    />  
          ) : (
            <Image
            src={CloseMenu}
            height={30}
            width={50}
            alt="Close-Menu"
            className="  h-6 w-8  fixed right-4 top-6"
          />  

          )
        }
        </button>

        <section className={`   md:flex md:justify-between md:w-screen md:fixed md:-top-14 md:left-24  ${menu ? 'bg-white shadow-2xl h-screen  w-2/3' : 'hidden'}`}> 
          <nav className="mt-20 md:flex md:justify-between ">
            <ul className="ml-4 md:flex md:justify-between ">
              <li className="px-2 py-1 md:pt-2  flex hover:text-black cursor-pointer" onClick={() => setSetaFeatures(prevSetaFeatures => !prevSetaFeatures)}>
                Features
                
                  
                  {!setaFeatures ? (
                    <Image
                      src={ArrowDown}
                      height={30}
                      width={30}
                      alt="Arrow-Down"
                      className="h-1 w-2 m-2 "
                  />
                  ) : (
                    
                    <Image
                      src={ArrowUp}
                      height={30}
                      width={30}
                      alt="Arrow-up"
                      className="h-1 w-2 m-2"
                  />
                    
                  )}

                
                
              </li>
              {setaFeatures ?
                  (<ul className="flex-col justify-center md:bg-white md:rounded-xl md:shadow-2xl  md:border-black md:fixed md:top-16 md:left-11 ">
                    <br />
                    <li className="mx-7 my-2 pb-2 flex hover:text-black cursor-pointer">
                      <Image
                        src={IconTodo}
                        height={30}
                        width={30}
                        alt="icon-todo"
                        className="h-4 w-4 mr-3"
                      />
                      Todo List
                      </li>
                    <li className="mx-7 my-2 pb-2 flex hover:text-black cursor-pointer">
                      <Image
                          src={Calendar}
                          height={30}
                          width={30}
                          alt="Calendar"
                          className="h-4 w-4 mr-3"
                        />
                      Calendar
                    </li>
                    <li className="mx-7 my-2 pb-2 flex hover:text-black cursor-pointer">
                      <Image
                          src={Reminders}
                          height={30}
                          width={30}
                          alt="Reminders"
                          className="h-4 w-4 mr-3"
                        />
                      Reminders</li>
                    <li className="mx-7 my-2 pb-2 flex hover:text-black cursor-pointer">
                      <Image
                          src={Planning}
                          height={30}
                          width={30}
                          alt="Planning"
                          className="h-4 w-4 mr-3"
                        />
                      Planning</li>
                  </ul>) : (
                    <div></div>
                  )
                }
              <li className="px-2 pt-2 flex hover:text-black cursor-pointer"  onClick={() => setSetaCompany(!setaCompany)}>
                Company
                {!setaCompany ? (
                    <Image
                      src={ArrowDown}
                      height={30}
                      width={30}
                      alt="Arrow-Down"
                      className="h-1 w-2 m-2"
                  />
                    
                  ) : (
                    
                    <Image
                      src={ArrowUp}
                      height={30}
                      width={30}
                      alt="Arrow-up"
                      className="h-1 w-2 m-2"
                  />
                  )}

                </li>
                {setaCompany ? (
                  <ul className="flex-col justify-center -mt-2 md:bg-white md:shadow-2xl md:fixed md:top-20 md:left-56 md:rounded-xl">
                    <br />
                    <li className="mx-7 my-2 pb-2  flex hover:text-black cursor-pointer">History</li>
                    <li className="mx-7 my-2 pb-2 flex hover:text-black cursor-pointer">Our Team</li>
                    <li className="mx-7 my-2 pb-2 flex hover:text-black cursor-pointer">Blog</li>
                  </ul>
                ) : (<div></div>)}
                
              <li className="p-2 md:mr-3 hover:text-black cursor-pointer">Careers</li>
              <li className="p-2 hover:text-black cursor-pointer">About</li>
            </ul>
            <ul className="flex-col justify-center md:flex md:justify-end md:text-end md:fixed  text-center p-3">
              <li className="cursor-pointer md:fixed md:right-44 md:top-8 hover:text-black">Login</li>
              <li className="cursor-pointer md:fixed md:right-10 md:top-6 md:py-2 md:px-4 py-1 hover:text-black hover:border-black rounded-xl border-gray-500 border-2">Register</li>
            </ul>
          </nav>
        </section>


    </nav>
  )
}

export default Navbar