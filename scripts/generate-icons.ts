import { readdir, readFile, writeFile, mkdir } from "fs/promises";
import { format } from "prettier";

const folders = ["solid", "outline"];

const baseFolder = "node_modules/heroicons/24";

const prettierConfig = {
  trailingComma: "all",
  printWidth: 100,
} as const;

async function generateIcons() {
  for (const folder of folders) {
    //get all file names
    const files = await readdir(`${baseFolder}/${folder}`);
    if (files.length > 0) {
      await mkdir(`src/icons/${folder}`, { recursive: true });
    }
    for (const file of files) {
      //read file text
      const text = (await readFile(`${baseFolder}/${folder}/${file}`)).toString();
      //convert to js files
      const code = format(
        `import { SVGFromText } from "@coconut-xr/koestlich"
      import React, { ComponentProps } from "react"
      const svg = \`${text}\`
      export function ${camelCase(
        file.slice(0, -4),
      )}(props: Omit<ComponentProps<typeof SVGFromText>, "text">) {
        return <SVGFromText height={0.1} {...props} text={svg} />
      }`,
        prettierConfig,
      );
      //write files
      await writeFile(`src/icons/${folder}/${file.slice(0, -4)}.tsx`, code);
    }

    await writeFile(
      `src/icons/${folder}/index.tsx`,
      format(
        files.map((file) => `export * from "./${file.slice(0, -4)}.js"`).join("\n"),
        prettierConfig,
      ),
    );
  }
}

function camelCase(name: string): string {
  return name[0].toUpperCase() + name.slice(1).replace(/-./g, (x) => x[1].toUpperCase());
}

generateIcons().catch(console.error);
