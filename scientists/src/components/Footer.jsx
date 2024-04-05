import { Footer, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitterX, BsGithub } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            {/* LOGO */}
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ">
                Indian
              </span>
              Researchers
            </Link>
          </div>

        {/* Multiple Sections like home, about */}
        <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">

          {/* SECTION 1 */}
          <div>

          <FooterTitle title = 'ABOUT' />
            {/* LINKS */}
            <FooterLinkGroup col>

              {/* LINK 1 */}
                {/* <Footer.Link 
                  href = '/search'
                  rel = 'noopener noreferrer'
                >
                    Post
                </Footer.Link> */}

                {/* LINK 2 */}
                <Footer.Link 
                  href = '/about'
                  rel = 'noopener noreferrer'
                >
                    
                </Footer.Link>

            </FooterLinkGroup>
            
          </div>
            
          {/* SECTION 2 */}
          <div>

          {/* <FooterTitle title = 'FOLLOW US' /> */}
            {/* LINKS */}
            <FooterLinkGroup col>

              {/* LINK 1 */}
                <Footer.Link 
                  href = '#'
                  target = '_blank'
                  rel = 'noopener noreferrer'
                >
                    {/* Github */}
                </Footer.Link>

                {/* LINK 2 */}
                <Footer.Link 
                  href = '#'
                  target = '_blank'
                  rel = 'noopener noreferrer'
                >
                    {/* Discord */}
                </Footer.Link>

            </FooterLinkGroup>
            
          </div>

          {/* SECTION 3 */}
          <div>

            {/* <FooterTitle title = 'LEGAL' /> */}
            {/* LINKS */}
            <FooterLinkGroup col>

              {/* LINK 1 */}
                <Footer.Link 
                  href = '#'
                >
                    {/* Privacy Policy */}
                </Footer.Link>

                {/* LINK 2 */}
                <Footer.Link 
                  href = '#'
                >
                    {/* Terms &amp; Conditions */}
                </Footer.Link>

            </FooterLinkGroup>
            
          </div>
          
        </div>

      </div>

      {/* FOOTER DIVIDER */}
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright 
          href="#"
          by="Indian-Researcher's"
          year={new Date().getFullYear()} 
        />

      {/* ICONS */}
      <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
        <Footer.Icon 
          href="#"
          icon={BsFacebook}
        />
        <Footer.Icon 
          href="#"
          icon={BsInstagram}
        />
        <Footer.Icon 
          href="#"
          icon={BsTwitterX}
        />
        {/* <Footer.Icon 
          href="#"
          icon={BsGithub}
        /> */}
      </div>
      </div>
      
      </div>
    </Footer>
  );
}
