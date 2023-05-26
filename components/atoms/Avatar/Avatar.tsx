import React from "react";
import { ChevronIcon } from "../../icons";

export type AvatarProps = {
  /** The first name of the user */
  firstName: string;
  /** The last name of the user */
  lastName: string;
};

/** Display of the initials of the user */
export const Avatar: React.FC<AvatarProps> = ({ firstName, lastName }) => {
  return (
    <div className="h-12 w-12 bg-blue-500 rounded-full border-2 border-gray-200 flex items-center justify-center">
      <div className="text-white font-bold">
        {firstName.toUpperCase().at(0)}
        {lastName.toUpperCase().at(0)}
      </div>
    </div>
  );
};
