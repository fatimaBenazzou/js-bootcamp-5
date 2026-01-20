declare type Theme = "light" | "dark";

declare interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}
