export const changeTheme = (theme: string, setTheme?: any) => {
  localStorage.setItem("theme", theme);
  setTheme(theme);
  document.documentElement.className = theme;
  console.log(theme);
};
