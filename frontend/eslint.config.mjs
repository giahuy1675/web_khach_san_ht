import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import noCrossFeatureImport from "./eslint-rules/no-cross-feature-import.mjs";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["src/features/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      architecture: {
        rules: {
          "no-cross-feature-import": noCrossFeatureImport,
        },
      },
    },
    rules: {
      "architecture/no-cross-feature-import": "error",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
