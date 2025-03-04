const Footer = () => {
  return (
    <footer className=" py-12 mt-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-black mb-8">Contacts</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
        <a
          href="mailto:ayodeleomodara1234@gmail.com"
          className="text-gray-900 hover:text-gray-500 transition-colors cursor-pointer"
        >
          Email: Oluwadanny19@gmail.com
        </a>
        <a
          href="https://wa.me/2348180722914"
          className="text-gray-900 hover:text-gray-500 transition-colors cursor-pointer"
        >
          Phone: +234 81-8072-2914
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer
