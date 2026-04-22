import React from "react";

export default function HightlightsSection({ sectionTitle, service }) {
  return (
    <>
      <h2 className="text-[27px] tablet:text-[29px] laptop:text-[32px] text-AltPrimary mb-2 font-medium">
        {sectionTitle}
      </h2>
      {service.map((highlight, id) => (
        <p key={id} className="text-Primary text-[15px] laptop:text-base mb-2">
          <b>✹ {highlight.title}: </b>
          {highlight.description}
        </p>
      ))}
    </>
  );
}
