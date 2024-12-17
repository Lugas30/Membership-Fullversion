import Image from "next/image";
import React from "react";

export default function AllBrands() {
  return (
    <div className="flex justify-center items-center gap-4 mt-16">
      <Image
        src="/images/brands/celcius.svg"
        width={150}
        height={150}
        alt="celcius"
        className="w-14"
      />
      <Image
        src="/images/brands/celcius-woman.svg"
        width={150}
        height={150}
        alt="celcius-woman"
        className="w-14"
      />
      <Image
        src="/images/brands/mississippi.svg"
        width={150}
        height={150}
        alt="mississippi"
        className="w-14"
      />
      <Image
        src="/images/brands/queensland.svg"
        width={150}
        height={150}
        alt="queensland"
        className="w-14"
      />
    </div>
  );
}