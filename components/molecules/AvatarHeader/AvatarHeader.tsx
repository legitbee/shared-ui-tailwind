import { useState } from "react";
import { Avatar, AvatarProps } from "../../atoms/Avatar/Avatar";
import { ChevronIcon } from "../../icons";
import clsx from "clsx";

type AvatarHeaderProps = AvatarProps & {
  onClick?: () => void;
};

export const AvatarHeader: React.FC<AvatarHeaderProps> = ({
  firstName,
  lastName,
  onClick,
}) => {
  const [_isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!_isOpen);
    onClick && onClick();
  };

  return (
    <button className="flex items-center" onClick={handleClick}>
      <div className="mr-2 font-medium">
        {firstName} {lastName}
      </div>
      <Avatar firstName={firstName} lastName={lastName} />
      <ChevronIcon
        className={clsx(
          "stroke-gray-800 transition duration-500 ease-in-out",
          _isOpen && "-rotate-180"
        )}
      />
    </button>
  );
};
