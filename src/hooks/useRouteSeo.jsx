import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import useSeo from "./useSeo";
import { buildRouteSeoOptions } from "../seo/routeSeo";

/**
 * Apply SEO metadata from siteRoutes.js for the current or given path.
 *
 * @param {string | { path?: string, extraJsonLd?: object[], og?: object, [key: string]: unknown }} [pathOrOptions]
 *   - Omit to use the current URL pathname.
 *   - Pass a path string, e.g. `useRouteSeo('/about')`.
 *   - Pass an options object to merge overrides, e.g. `useRouteSeo({ path: '/blog', extraJsonLd: [...] })`.
 */
export default function useRouteSeo(pathOrOptions) {
  const location = useLocation();

  const { path, overrides } = useMemo(() => {
    if (typeof pathOrOptions === "string") {
      return { path: pathOrOptions, overrides: {} };
    }
    if (pathOrOptions && typeof pathOrOptions === "object") {
      const { path: explicitPath, ...rest } = pathOrOptions;
      return {
        path: explicitPath ?? location.pathname,
        overrides: rest,
      };
    }
    return { path: location.pathname, overrides: {} };
  }, [pathOrOptions, location.pathname]);

  const seoOptions = useMemo(
    () => buildRouteSeoOptions(path, overrides),
    [path, overrides]
  );

  useSeo(seoOptions);
}
