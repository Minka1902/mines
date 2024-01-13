export default function Preloader({ text }) {
  return (
    <div className="preloader_container" role="status" aria-label="Loading">
      <div className="preloader__circle" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div>
      <span className="preloader__text">{text || 'Loading...'}</span>
    </div>
  );
};
