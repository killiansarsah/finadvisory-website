import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Official FinAdvisory Corporate Logo
 * Renders the high-resolution brand asset provided in public/images/FinAdvisory Corporate Logo.png
 * - Standard version: Midnight Navy & Royal Gold (for light navbar background)
 * - Light version: Crisp White & Royal Gold (for dark footer background)
 * - Automatically scrolls to top and invokes optional onClick callback
 */
export function Logo({ light = false, compact = false, className = '', onClick }) {
  const logoSrc = light
    ? '/images/FinAdvisory-Corporate-Logo-White.png'
    : '/images/FinAdvisory-Corporate-Logo.png';

  const handleClick = (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link
      to="/"
      onClick={handleClick}
      className={`brand-container ${light ? 'brand-light' : ''} ${compact ? 'brand-compact' : ''} ${className}`}
      aria-label="FinAdvisory Chartered Accountants - Home"
    >
      <img
        src={logoSrc}
        alt="FinAdvisory Chartered Accountants - Trusted Advice. Lasting Value."
        className="brand-official-logo"
        loading="eager"
        width="2168"
        height="725"
      />
    </Link>
  );
}

export default Logo;
