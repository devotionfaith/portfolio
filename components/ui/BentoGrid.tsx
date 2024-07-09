import { cn } from "@/utils/cn";
import { GlobeDemo } from "./GridGlobe";
import { StickyScrollReveal } from "./GridStickySroll";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-4 grid-rows-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  classNameData,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  classNameData?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "NextJS", "Typescript"];
  const middleLists = ["Kotlin", "XML", "PHP"];
  const rightLists = ["NextJS", "PHP", "ReactJS"];
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4",
        classNameData
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div
        className={`${
          id === 4 || id === 3 || id === 2 ? "flex justify-center" : ""
        } ${id === 1 && "flex justify-start items-end"} h-full`}
      >
        <div className="h-full w-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center w-full h-full")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "relative h-full flex flex-col p-4 sm:p-6 lg:p-8",
            {
              "group-hover/bento:translate-x-2 transition duration-200":
                id !== 4,
            },
            {
              "justify-end":
                id === 1,
            }
          )}
        >
          <div className={`font-sans font-light mb-4 text-left ${id === 2 && "lg:pl-5 lg:pr-8 lg:pb-5 lg:max-w-96"} sm:max-w-32 sm:text-xs lg:text-base text-sm text-[#C1C2D3] z-20`}>
            {description}
          </div>
          <div
            className={`font-sans text-md lg:text-2xl max-w-96 font-bold z-20`}
          >
            {title}
          </div>
          {id === 3 && <GlobeDemo />}
          {id === 2 && (
            <div className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.2] opacity-40 flex items-center justify-center absolute top-0 left-0">
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
          )}
          {id === 4 && <StickyScrollReveal />}
          {id === 5 && (
            <div className="flex gap-1 opacity-60 text-slate-300 lg:gap-2 w-fit absolute -right-3 lg:-right-12">
              <div className="flex flex-col gap-1 md:gap-3 lg:gap-3">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] hover:-translate-y-2 transition duration-100 "
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E] hover:-translate-y-2 transition duration-100"></span>
              </div>
              <div className="flex flex-col gap-1 md:gap-3 lg:gap-3">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E] hover:-translate-y-2 transition duration-100"></span>
                {middleLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] hover:-translate-y-2 transition duration-100 "
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-1 md:gap-3 lg:gap-3">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] hover:-translate-y-2 transition duration-100"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E] hover:-translate-y-2 transition duration-100"></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
