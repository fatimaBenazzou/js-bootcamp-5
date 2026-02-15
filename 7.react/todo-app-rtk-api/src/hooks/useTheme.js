import { useDispatch, useSelector } from "react-redux";
import { toggleTheme as toggleThemeAction } from "../app/slices/theme";
import { useCallback } from "react";

export const useTheme = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleTheme = useCallback(
    () => dispatch(toggleThemeAction()),
    [dispatch]
  );

  return { theme, toggleTheme };
};
