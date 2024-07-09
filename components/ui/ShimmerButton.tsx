import React from 'react'

const ShimmerButton = (
    {
        title,
        icon,
        position,
        handleClick,
        otherClasses
    }
: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
  return (
    <div>
        <button className={`inline-flex h-12 md:w-60 md:mt-10 gap-2 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-white transition-colors focus:outline-none ${otherClasses}`}>
          {position === 'left' && icon}
          {title}
          {position === 'right' && icon}
        </button>
    </div>
  )
}

export default ShimmerButton
