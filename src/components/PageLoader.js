const PageLoader = () => {
  return (
    <>
      <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50`}>
        <div className="h-9 w-9 flex items-center justify-center bg-transparent">
          <div className="h-full w-full rounded-full border-4 border-blue-500 border-t-transparent animate-spin relative"></div>
        </div>
      </div>
    </>
  );
};

export default PageLoader;
