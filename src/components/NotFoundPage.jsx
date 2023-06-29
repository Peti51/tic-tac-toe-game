// A NotFoundPage komponens exportálása, hogy más fájlokban is használható legyen.
// Ez a komponens egy oldalt reprezentál, amelyet a 404-es hibakódhoz kapcsolunk,
// amikor is a kért oldal nem található.
export const NotFoundPage = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title">Page not found</h1>
      </div>
    </main>
  );
};

// A NotFoundPage komponens egy egyszerű oldalt jelenít meg a "Page not found" szöveggel. 
// Ez a komponens akkor jelenik meg, ha a kért oldal nem található.
