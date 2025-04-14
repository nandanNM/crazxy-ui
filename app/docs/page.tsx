import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import CodeSnippet from "./components/code-snippet";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">🧙‍♂️ Crazxy UI Installation Guide</h1>
        <h3 className="text-muted-foreground">
          Let’s summon some components and make your app ✨magical✨.
        </h3>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">🧠 TypeScript is your friend</h2>
        <Separator />
        <p>
          This project speaks fluent TypeScript. We highly recommend using it
          unless you enjoy debugging JavaScript at 3 AM. 😅
        </p>
      </div>

      {/* Updated Alert with Light and Dark Mode Gradients */}
      <Alert className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 border-0 shadow-md">
        <AlertTitle>🚨 Note:</AlertTitle>
        <AlertDescription>
          This guide is optimized for Tailwind v4. Still on Tailwind v3?
          Time-travel back to <code>shadcn@2.3.0</code>!
        </AlertDescription>
      </Alert>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">🛠️ 1. Create Project</h3>
        <p>
          Let’s kick things off! Run the magic spell below to conjure your
          Next.js project:
        </p>
        <CodeSnippet>{`pnpm dlx shadcn@canary init`}</CodeSnippet>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">✨ 2. Add Components</h3>
        <p>
          Now summon the mighty <strong>Crazxy Button</strong> 🪄
        </p>
        <CodeSnippet>{`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/crazxy-button.json`}</CodeSnippet>
        <p>
          You’ve got the button! Use it like this and make your UI go
          *crazxyyy*:
        </p>
        <CodeSnippet>{`import { Button } from "@/components/ui/crazxy/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}`}</CodeSnippet>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">🎉 That’s it!</h1>
        <h1 className="text-3xl font-bold">
          If you are not using shadcn yet, continue reading 👇
        </h1>
        <h3 className="text-lg font-bold">
          🌈 3. Don’t forget the magic potion (aka CSS vars)
        </h3>
        <Alert className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 dark:from-yellow-900 dark:via-orange-900 dark:to-red-900 border-0 shadow-md">
          <AlertTitle>⚠️ Important:</AlertTitle>
          <AlertDescription>
            If you haven’t already set up shadcn’s CSS variables, your
            components might look like they just came back from a rough party.
          </AlertDescription>
        </Alert>
        <p>
          Add this to your <code>tailwind.config.ts</code> to enable the correct
          theme variables:
        </p>
        <CodeSnippet>{`import { fontFamily } from "tailwindcss/defaultTheme"

export const theme = {
  extend: {
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
    },
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      // ...keep the rest of your colors here
    },
  },
}`}</CodeSnippet>
        <p>
          Once that’s done, your app will be looking ✨ fabulous ✨ and ready to
          roll with Crazxy UI!
        </p>
      </div>
    </div>
  );
}
