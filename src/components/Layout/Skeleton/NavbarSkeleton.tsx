// components/skeletons/NavbarSkeleton.jsx
const NavbarSkeleton = () => (
  <div className="w-full h-16 px-4 flex items-center justify-between bg-gray-100 animate-pulse">
    {/* Logo placeholder */}
    <div className="h-6 w-24 bg-gray-300 rounded" />
    
    {/* Menu items */}
    <div className="flex gap-4">
      {[...Array(3)].map((_, idx) => (
        <div key={idx} className="h-4 w-12 bg-gray-300 rounded" />
      ))}
    </div>
    
    {/* User/avatar */}
    <div className="h-8 w-8 bg-gray-300 rounded-full" />
  </div>
);
export default NavbarSkeleton;