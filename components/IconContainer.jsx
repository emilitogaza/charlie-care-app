import OIcon from "../assets/icons/OIcon";
import XIcon from "../assets/icons/XIcon";

const IconNames = ["XIcon", "OIcon"];

function Icon(props) {
  const { name, strokeWidth = 1, color = "currentColor", className } = props;

  const icons = {
    XIcon,
    OIcon,
  };

  const SvgIcon = icons[name];

  if (!SvgIcon) {
    console.warn(`Icon with name "${name}" does not exist.`);
    return null;
  }

  return (
    <SvgIcon
      style={{ fill: "none", color }}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}

export default Icon;
