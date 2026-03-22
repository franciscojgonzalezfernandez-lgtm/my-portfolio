import fs from "fs";
import path from "path";

export function getMessages(locale: string) {
  const file = path.join(process.cwd(), "i18n", `${locale}.json`);
  if (!fs.existsSync(file)) return {};
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}
