import React from "react"

const Testimonial = ({ title, name, jobTitle, children }) => {
  return (
    <div className="w-full sm:w-1/2 -mx-2 flex flex-col items-start">
      <div className="mx-2">
        <h2 className="text-3xl text-gray-800">{title}</h2>
        <p>
          <strong className="mr-2">{name}</strong>
          <span>{jobTitle}</span>
        </p>
      </div>
      <div className="w-full mt-2 mx-2">
        <blockquote className="testimonial-quote">{children}</blockquote>
      </div>
    </div>
  );
};

export default Testimonial
