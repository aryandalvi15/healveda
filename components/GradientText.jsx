export default function GradientText({
  children,
  className = '',
  colors = ['#ffaa40', '#9c40ff', '#ffaa40'],
  animationSpeed = 8,
  showBorder = false
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    backgroundSize: '300% 100%',
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div
      className={`relative mx-auto flex max-w-fit items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
    >
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover pointer-events-none animate-gradient-scroll"
          style={gradientStyle}
        >
          {/* border background etc */}
          <div
            className="absolute inset-0 bg-black rounded-[1.25rem] pointer-events-none"
            style={{
              width: 'calc(100% - 2px)',
              height: 'calc(100% - 2px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          ></div>
        </div>
      )}

      <div
        className="relative z-10 text-transparent bg-cover animate-gradient-scroll"
        style={{
          ...gradientStyle,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text'
        }}
      >
        {children}
      </div>
    </div>
  );
}
