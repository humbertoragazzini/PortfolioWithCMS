"use client";

export default function OverlayMenu() {
  const handleLanguage = async (lang: string) => {
    await fetch("/api/set-lang", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lang: lang }),
    });

    // 2. Get current path (e.g., /es-es/about or /about)
    const currentPath = window.location.pathname;

    // 3. Split path and check for language prefix
    const parts = currentPath.split("/").filter(Boolean); // removes empty parts

    // 4. Remove the old lang prefix if it exists
    const knownLangs = ["en-us", "es-es"];
    if (knownLangs.includes(parts[0])) {
      parts.shift(); // remove lang from beginning
    }

    // 5. Construct new path with new lang
    const newPath = `/${lang}/${parts.join("/")}`;

    // 6. Redirect the user
    window.location.href = newPath;
  };

  return (
    <div className="text-base">
      <button
        className="p-4 bg-red-400 hover:bg-red-300"
        onClick={(e) => {
          handleLanguage("en-us");
        }}
      >
        Change to english
      </button>
      <button
        className="p-4 bg-red-400 hover:bg-red-300"
        onClick={(e) => {
          handleLanguage("es-es");
        }}
      >
        Cambiar a espaniol
      </button>
    </div>
  );
}
