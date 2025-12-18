import { CustomImage } from "./high-order-components/CustomImage";

export const GitHubActivity = () => {
  return (
    <section className="container mx-auto rounded-xl border bg-card/50 p-4 sm:p-6">
      <div className="grid gap-6 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)] items-start">
        {/* Columna texto */}
        <div className="space-y-3">
          <h2 className="text-lg sm:text-2xl font-semibold tracking-tight">
            GitHub activity
          </h2>
          <p className="text-lg text-muted-foreground">
            Overview of my recent contributions across public repositories:
            personal projects, experiments, and learning work.
          </p>
          <p className="text-lg text-muted-foreground">
            Consistent commits focused on modern web development, cloud
            architecture, and frontend performance.
          </p>
          <a
            href="https://github.com/franciscojgonzalezfernandez-lgtm"
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-xs font-medium text-muted-foreground hover:text-foreground underline underline-offset-4"
          >
            View full GitHub profile
          </a>
        </div>

        {/* Columna gráfico */}
        <div className="overflow-hidden rounded-lg border bg-background">
          <CustomImage
            src="https://github-readme-activity-graph.vercel.app/graph?username=franciscojgonzalezfernandez-lgtm&theme=github-compact"
            alt="GitHub activity graph for Francisco Javier González"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};
