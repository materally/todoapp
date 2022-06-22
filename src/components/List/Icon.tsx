import { ReactElement } from "react";

interface IconProps {
  icon: ReactElement<any, any>;
  label: string;
  onClick: () => void;
}

const Icon = ({ icon, label, onClick }: IconProps): JSX.Element => {
  return (
    <div
      className="mb-3 d-flex align-items-center flex-column"
      onClick={onClick}
    >
      {icon}
      {label}
    </div>
  );
};

export default Icon;
