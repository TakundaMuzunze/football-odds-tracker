import { iconData, type IconName } from './iconData';

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className = '' }: IconProps) {
  const svgString = iconData[name];

  if (!svgString) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const modifiedSvg = svgString
    .replace(/<svg /, '<svg style="width:100%;height:100%;" ')
    .replace(/width="[^"]*"/g, '')
    .replace(/height="[^"]*"/g, '')
    .replace(/stroke="currentColor"/g, 'stroke="currentColor"')
    .replace(/fill="none"/g, 'fill="none"');

  return <span className={`inline-block flex-shrink-0 text-current ${className}`} dangerouslySetInnerHTML={{ __html: modifiedSvg }} />;
}

