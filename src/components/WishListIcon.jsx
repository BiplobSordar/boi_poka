import { Heart } from "lucide-react";

const WishlistIcon = ({ count = 0 }) => {
  return (
    <div className="relative inline-flex items-center justify-center">
      
      <Heart className="w-7 h-7 text-orange-500 font-bold" />

   
      {count > 0 && (
        <span
          className="absolute -top-1.5 -right-2 bg-red-600 text-white 
          text-[10px] font-bold leading-none rounded-full 
          w-4 h-4 flex items-center justify-center"
        >
          {count}
        </span>
      )}
    </div>
  );
};

export default WishlistIcon;
