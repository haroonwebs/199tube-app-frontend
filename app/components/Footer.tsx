import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-linear-to-r from-blue-950 to-black text-white">
        <div className="mx-auto max-w-7xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-7 me-3"
                  alt="FlowBite Logo"
                />
                <span className="text-heading self-center hover:text-blue-600 text-2xl font-semibold whitespace-nowrap">
                  OutfitZone
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <ul className="text-body font-medium">
                  <li className="mb-4">
                    <Link href={"/aboutus"} className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href={"/products"} className="hover:underline">
                      Products
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-body font-medium">
                  <li className="mb-4">
                    <Link href={"/orders"} className="hover:underline ">
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link href={"/contact"} className="hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-body font-medium">
                  <li className="mb-4">
                    <Link href={"#"} className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"} className="hover:underline">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-default sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-body sm:text-center">
              © 2025{" "}
              <Link href="/" className="hover:underline">
                OutfitZone™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <Link href="#" className="text-body hover:text-heading">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link href="#" className="text-body hover:text-heading ms-5">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link
                href="https://wa.me/923157485699"
                className="text-body hover:text-heading ms-5"
                target="_blank"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.04 2C6.56 2 2.1 6.46 2.1 11.94c0 1.9.5 3.74 1.46 5.37L2 22l4.86-1.53a9.9 9.9 0 0 0 5.18 1.41h.01c5.48 0 9.94-4.46 9.94-9.94S17.53 2 12.04 2Zm0 18.06a8.07 8.07 0 0 1-4.11-1.13l-.29-.17-2.88.91.94-2.8-.19-.29a8.02 8.02 0 1 1 6.53 3.48Zm4.42-6.03c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.11.16 1.53.1.47-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
                </svg>

                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-body hover:text-heading ms-5"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2c2.717 0 3.056.01 4.122.058 1.065.049 1.791.218 2.427.465a4.92 4.92 0 0 1 1.78 1.16 4.92 4.92 0 0 1 1.16 1.78c.247.636.416 1.362.465 2.427C21.99 8.944 22 9.283 22 12s-.01 3.056-.058 4.122c-.049 1.065-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.16 1.78 4.902 4.902 0 0 1-1.78 1.16c-.636.247-1.362.416-2.427.465C15.056 21.99 14.717 22 12 22s-3.056-.01-4.122-.058c-1.065-.049-1.791-.218-2.427-.465a4.92 4.92 0 0 1-1.78-1.16 4.92 4.92 0 0 1-1.16-1.78c-.247-.636-.416-1.362-.465-2.427C2.01 15.056 2 14.717 2 12s.01-3.056.058-4.122c.049-1.065.218-1.791.465-2.427a4.902 4.902 0 0 1 1.16-1.78 4.902 4.902 0 0 1 1.78-1.16c.636-.247 1.362-.416 2.427-.465C8.944 2.01 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4Zm5.25-8.45a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="sr-only">Instagram account</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
