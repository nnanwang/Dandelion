export default function Button({ href, children, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] transition duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream';
  const styles = {
    primary: 'bg-sage text-white hover:-translate-y-0.5 hover:bg-[#244A2E]',
    secondary: 'border border-border bg-paper/80 text-ink hover:-translate-y-0.5 hover:border-gold hover:text-gold',
    gold: 'bg-gold text-ink hover:-translate-y-0.5 hover:bg-[#D8BC7A]',
  };

  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
