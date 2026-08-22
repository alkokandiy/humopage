export default function LogoMark({ className = 'h-[50px] w-[50px]' }) {
  return (
    <img
      src="/logo.jpg"
      alt="Humo Racing"
      className={className}
      draggable="false"
    />
  );
}