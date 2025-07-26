"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Project`.
 */
export type ProjectProps = SliceComponentProps<Content.ProjectSlice>;

/**
 * Component for "Project" Slices.
 */
const Project: FC<ProjectProps> = ({ slice }) => {
  console.log(slice.primary);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <p>{slice.primary.title}</p>
      <p>{slice.primary.content}</p>
      {slice.primary.technologies.length > 0 && (
        <>
          {slice.primary.technologies.map((tech) => {
            return <p key={JSON.stringify(tech)}>{tech.name}</p>;
          })}
        </>
      )}
    </section>
  );
};

export default Project;
