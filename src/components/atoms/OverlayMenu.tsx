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
  };

  return (
    <div>
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
