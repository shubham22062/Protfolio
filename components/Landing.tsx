export default function Landing() {
  return (
    <div className="relative w-full h-screen">
      
      {/* Background Image */}
      <img
        src="/Landing.svg"
        alt="Landing"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="bg-gradient-to-r from-white text-3xl via-red-500 to-red-400 md:text-5xl bg-clip-text text-transparent font-extrabold animate-pulse">
          SHUBHAM AWASTHI ...
        </h1>
      
      </div>
      
    </div>
  );
}