import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
    entry: {
        index: "src/index.ts",
        components: "src/components/index.ts"
        // extensions: "src/extensions/index.ts",
        // plugins: "src/plugins/index.ts",
        // utils: "src/utils/index.ts",
    },

    format: ["cjs", "esm"],
    dts: true,
    clean: true,
    minify: true,
    external: ["react", "react-dom"],
    ...options,
}));