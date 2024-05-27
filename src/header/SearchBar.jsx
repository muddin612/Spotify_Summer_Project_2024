export default function SearchBar() {
  return (
    <>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search" />
        <button
          className="btn btn-primary"
          type="button"
          style={{ backgroundColor: "#1DB954" }}
        >
          Search
        </button>
      </form>
    </>
  );
}
