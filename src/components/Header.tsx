import Image from "next/image"
import { 
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  User,
  ShoppingCart
} from "lucide-react"

export function Header({ logoSrc = "/logo.png" }: { logoSrc?: string }) {
  return (
    <header className="bg-white border-b-4 border-[#15442F]">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Left side - Social Icons */}
          <div className="flex items-center justify-start space-x-3">
            <Facebook className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer" />
            <Twitter className="h-5 w-5 text-gray-600 hover:text-blue-400 transition-colors duration-200 cursor-pointer" />
            <Instagram className="h-5 w-5 text-gray-600 hover:text-pink-600 transition-colors duration-200 cursor-pointer" />
            <Linkedin className="h-5 w-5 text-gray-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer hidden sm:block" />
          </div>

          {/* Center - Logo */}
          <div className="flex items-center justify-center space-x-3 logo">
              <Image
                src={logoSrc}
                alt="AmrithaKesham Logo"
                width={50}
                height={50}
                />
            <div className="logo-text">
              Amrithakesham
            </div>
            {/* <span className="text-xs text-gray-500 uppercase tracking-wider mt-1">
              NATURAL NATURE STORE
            </span> */}
          </div>

          {/* Right side - User and Cart Icons */}
          <div className="flex items-center justify-end space-x-2">
            <button className="p-2 hover:bg-gray-50 rounded-md transition-colors">
              <User className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-md transition-colors relative">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
