import { iconData, type IconName } from './iconData';

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export function Icon({ name, className = '', size = 20 }: IconProps) {
  const svgString = iconData[name];
  
  if (!svgString) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <span 
      className={className}
      style={{ width: size, height: size, display: 'inline-block' }}
      dangerouslySetInnerHTML={{ __html: svgString }}
    />
  );
}
