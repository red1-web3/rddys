import React from "react";

function FeaturedProject() {
  return (
    <section className="bg-[url('/featured_project_bg.jpg')] bg-no-repeat bg-cover relative py-16">
      <div className="relative z-[2] container grid grid-cols-2">
        <strong className="bg-black w-fit text-white font-extrabold text-xs px-1.5 py-0.5 rounded uppercase">
          Featured Product
        </strong>
      </div>
      <div className="absolute top-0 left-0 bg-gradient-to-r from-secondary/90 to-secondary/80 w-full h-full"></div>
    </section>
  );
}

export default FeaturedProject;
