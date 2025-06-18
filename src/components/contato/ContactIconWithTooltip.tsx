interface ContactIconWithTooltipProps {
  href: string;
  label?: string;
  icon: React.ReactNode;
  ariaLabel?: string;
  download?: boolean;
}

export function ContactIconWithTooltip({
  href,
  label,
  icon,
  ariaLabel,
  download = false,
}: ContactIconWithTooltipProps) {
  const isExternal = href.startsWith("http");

  return (
    <div className="relative group">
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-primary text-3xl hover:scale-110 transition-all duration-300 hover:text-text-contrast"
        aria-label={ariaLabel || label}
        download={download ? true : undefined}
      >
        {icon}
      </a>
      {label && (
        <span className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all text-xs px-3 py-1.5 rounded-md shadow z-10 min-w-max whitespace-nowrap bg-bg-primary dark:bg-bg-dark border">
          {label}
        </span>
      )}
    </div>
  );
}
