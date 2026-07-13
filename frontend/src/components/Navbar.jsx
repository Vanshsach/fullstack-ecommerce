function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">
          MERN Shop
        </h1>

        <div className="space-x-6">
          <a href="/">Home</a>
          <a href="/">Cart</a>
          <a href="/">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;