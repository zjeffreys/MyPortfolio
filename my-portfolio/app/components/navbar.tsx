export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 text-white bg-black">
      <div className="text-lg font-semibold tracking-wide">Zachary Jeffreys</div>

      <ul className="flex gap-6 text-sm">
        <li className="hover:text-gray-300 transition-colors cursor-pointer">Home</li>
        <li className="hover:text-gray-300 transition-colors cursor-pointer">About</li>
        <li className="hover:text-gray-300 transition-colors cursor-pointer">Projects</li>
        <li className="hover:text-gray-300 transition-colors cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
