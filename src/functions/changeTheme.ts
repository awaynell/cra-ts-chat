export const changeTheme = (theme: string, setTheme?: any) => {
  document.documentElement.className = theme;
  localStorage.setItem("theme", theme);
  setTheme(theme);
  console.log(theme);
};
