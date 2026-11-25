export default function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-lockup" aria-label="Vivus Business">
      <span className="brand-monogram" aria-hidden="true">V</span>
      {!compact && <span className="brand-name"><span>VIVUS</span><span className="brand-business">BUSINESS</span></span>}
    </span>
  );
}
