import React from "react";
import { Wrapper, Container } from "@/components";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
const HomePage = () => {
  return (
    <section className=" w-full relative flex items-center justify-center px-4 md:px-0 py-8">
      {/* Hero section  */}

      <Wrapper>
        <Container>
          <div className=" flex flex-col items-center justify-center py-20 w-full">
            <div className="flex flex-col items-center justify-center py-20 h-full">
              <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                <span>
                  <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                </span>
                <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
                <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                  <Image
                    src="/icons/sparkles-dark.svg"
                    alt="✨"
                    width={24}
                    height={24}
                    className="w-4 h-4"
                  />
                  Introducing The StartUp Landing page
                  <ChevronRight className="w-4 h-4" />
                </span>
              </button>

              <div className="flex flex-col items-center mt-8 max-w-3xl mx-auto w-11/12 md:w-full">
                <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                  Build your next idea and ship your dream site
                </h1>

                <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
                  Zero code, maximum speed. Make professional sites easy, fast
                  and fun while delivering best-in-class SEO, performance.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default HomePage;
