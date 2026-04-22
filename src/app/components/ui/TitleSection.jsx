import React from "react";

export default function TitleSection({ title, subTitle, italic, marginBottom}) {
  return (
    <div>
      <h3 className="text-sm text-Primary py-1 px-3 border border-gray-300 w-fit rounded-full" style={{marginBottom: marginBottom}}>
        {title}
      </h3>
      <h2 className="text-[34px] tablet:text-[40px] lg:text-[52px]/15 mb-2 lg:mb-5 text-Primary max-w-xl font-semibold">
        {subTitle}<span className="font-playfair-display">{italic}</span>
      </h2>
    </div>
  );
}
