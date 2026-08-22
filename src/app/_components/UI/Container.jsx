export const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full max-w-7xl px-2 sm:px-4 lg:px-6 xl:px-0 mx-auto ${className}`}
    >
      {children}
    </div>
  );
};
