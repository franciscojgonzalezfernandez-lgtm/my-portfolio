// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta } from "@storybook/nextjs-vite";

import { Contact } from "./contact";

const meta = {
  component: Contact,
} satisfies Meta<typeof Contact>;

export default meta;
