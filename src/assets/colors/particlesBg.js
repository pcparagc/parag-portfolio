export const particleBgColors = () => {
  // for dark use atom one dark, for light use CLRS
  const background = (darkMode = false) => (darkMode ? '#0d2538' : '#e9edf0');
  const particle = (darkMode = false) => (darkMode ? '#dae3e5' : '#2f3e46');
  const links = (darkMode = false) => (darkMode ? '#dbe4ee' : '#cad2c5');

  return {
    background,
    particle,
    links,
  };
};
