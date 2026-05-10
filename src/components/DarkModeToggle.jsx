function DarkModeToggle({ toggleDarkMode, darkMode }) {
  return (
    <div style={{ textAlign: "right", padding: "10px" }}>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default DarkModeToggle;
