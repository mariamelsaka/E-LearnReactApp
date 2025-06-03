// components/skeletons/FooterSkeleton.jsx
const FooterSkeleton = () => (
  <div className="w-full px-4 py-8 bg-gray-100 animate-pulse">
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-4">
      {[...Array(4)].map((_, i) => (
        <div key={i}>
          <div className="h-4 w-24 bg-gray-300 rounded mb-2" />
          {[...Array(3)].map((_, j) => (
            <div key={j} className="h-3 w-16 bg-gray-200 rounded mb-1" />
          ))}
        </div>
      ))}
    </div>
    <div className="h-4 w-40 bg-gray-300 rounded mx-auto" />
  </div>
);
export default FooterSkeleton;