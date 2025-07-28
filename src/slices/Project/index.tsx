"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Html } from "@react-three/drei";

/**
 * Props for `Project`.
 */
export type ProjectProps = SliceComponentProps<Content.ProjectSlice>;

/**
 * Component for "Project" Slices.
 */
const Project: FC<ProjectProps> = ({ slice }) => {
  return (
    <Html
      transform
      occlude
      rotation={[
        0,
        slice.primary.order % 2 !== 0 ? Math.PI / 4 : -Math.PI / 4,
        0,
      ]}
      position={[0, 0, -5 * (slice.primary.order ?? 0)]}
    >
      <div className="text-white bg-red-400">
        <p>{slice.primary.title}</p>
        <p>{slice.primary.content}</p>
        {slice.primary.technologies.length > 0 && (
          <>
            {slice.primary.technologies.map((tech) => {
              return <p key={JSON.stringify(tech)}>{tech.name}</p>;
            })}
          </>
        )}
      </div>
    </Html>
  );
};

export default Project;
