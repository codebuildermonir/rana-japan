
import { EmailIcon, LoginIcon, RegisterIcon } from "@/assets/Icons"
import Link from "next/link"

const TopBar= ()=>{
      return(
            <section>
               <div className="px-6 py-2 text-sm md:text-base1 bg-background-image-1 text-white md:flex justify-between">
               <div className="hidden md:flex gap-4 sm:text-sm">
                <p className="flex items-center gap-1">
                 <Link href="mailto:japaninternationllanguage@gmail.com"> <EmailIcon></EmailIcon></Link>
                <a href="mailto:japaninternationllanguage@gmail.com">japaninternationllanguage@gmail.com</a>
               </p>
               </div>
               <div className="flex md:hidden gap-4 place-content-center items-center">
                  <Link href="mailto:japaninternationllanguage@gmail.com"><EmailIcon/></Link>
                  <Link href="#">
                  <svg
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   fill="currentColor"
                   className="w-5">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path>
                  </svg>
                  </Link>
                  <Link href="#"> <LoginIcon></LoginIcon> </Link>
                  <Link href="#"> <RegisterIcon></RegisterIcon></Link>
               </div>
               <div className="hidden md:flex gap-8">
               <div className="flex gap-2">
               <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor"
               className="w-5">
               <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path>
               </svg>
               <p>English</p>
               <Link href="#">
               <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor"
               className="w-6">
               <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
               </svg>
               </Link>
               </div>
               <div className="flex gap-1">
               <Link href="/">Login</Link>
               <span>/</span>
               <Link href="/">Register</Link>
               </div>
               </div>
               </div>
            </section>
      )
}

export default TopBar