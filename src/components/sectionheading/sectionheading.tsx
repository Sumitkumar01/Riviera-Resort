import React from "react";

function Sectionheading({
  title,
  subtitle,
  para,
}: {
  title?: string;
  subtitle?: string;
  para?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      {title && (
        <h2 className="text-3xl text-center text-[#040404] font-semibold">
          {title}
        </h2>
      )}

      {subtitle && <p className="text-center text-md  text-[#474747]">{subtitle}</p>}
      {para && <p className="text-center text-md  text-[#474747]">{para}</p>}
    </div>
  );
}

export default Sectionheading;
