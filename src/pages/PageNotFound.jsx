function PageNotFound() {
  return (
      <div className="bg-gray-700 h-screen flex items-center justify-center">
        <div className="grid gap-5 text-white font-semibold">
        <p className="text-6xl text-white font-bold">Page Not Found.</p>
        <p className="text white">Sorry, the page you were looking for doesn't exist.</p>
        </div>
      </div>
  );
}

export default PageNotFound;
