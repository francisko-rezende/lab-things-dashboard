import { type ClassNameValue, twMerge } from "tailwind-merge";

type CombineClassesProps = ClassNameValue[];

export const combineClasses = (...classes: CombineClassesProps) => {
  return twMerge(classes);
};
