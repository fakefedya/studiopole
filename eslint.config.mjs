import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";

const config = defineConfig([
  // База Next + CWV
  ...nextVitals,
  // TypeScript правила поверх базы
  ...nextTs,

  // Основные правила для исходников
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      import: importPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      // Нормальная дисциплина в коде
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",

      // Убираем дубль-репорты: пусть этим рулит unused-imports
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Авто-чистка импортов и аккуратные unused vars
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // Импорт-порядок — максимально “без сюрпризов”
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },

          // Если используешь алиас "@/..."
          pathGroups: [
            { pattern: "@/**", group: "internal", position: "after" },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
        },
      ],
    },
  },

  // Конфиги/скрипты: менее строгие правила, чтобы не мешали
  {
    files: [
      "**/*.{config,conf}.{js,cjs,mjs}",
      "eslint.config.mjs",
      "stylelint.config.mjs",
      ".prettierrc.mjs",
      "prettier.config.mjs",
    ],
    plugins: {
      import: importPlugin,
    },
    rules: {
      "no-console": "off",
      "import/no-anonymous-default-export": "off",
    },
  },

  // Всегда в конце — чтобы ESLint не спорил с Prettier
  prettier, // :contentReference[oaicite:5]{index=5}

  // Игноры: расширяем дефолты Next
  globalIgnores([
    // дефолтные ignores из примера Next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",

    // типичные доп. для реальных проектов:
    "dist/**",
    "coverage/**",
    ".turbo/**",
    ".vercel/**",
    "node_modules/**",
  ]),
]);

export default config;
