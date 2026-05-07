import { SectionHeading, SectionShell } from "@/components/devnet/SectionShell";
import { Card, CardContent } from "@/components/ui/card";

const faculties = [
  {
    title: "Business",
    body: "Build automations, startup tools, CRMs, dashboards, and internal systems.",
  },
  {
    title: "Health Science",
    body: "Build research tools, workflow systems, patient education tools, and data trackers.",
  },
  {
    title: "Engineering",
    body: "Build prototypes, simulations, hardware dashboards, and technical products.",
  },
  {
    title: "Arts / Media",
    body: "Build portfolios, creative tools, content systems, and digital experiences.",
  },
  {
    title: "Computer Science",
    body: "Build apps, APIs, AI tools, SaaS products, and open-source projects.",
  },
  {
    title: "Entrepreneurs",
    body: "Build MVPs, landing pages, pitch demos, and customer-facing products.",
  },
];

export function AnyoneCanBuild() {
  return (
    <SectionShell id="anyone-can-build">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Accessibility"
          title="You do not need to be a technical expert to start building."
          description="AI has changed what it means to build. DevNet exists to make that shift accessible — welcoming beginners, experienced developers, founders, designers, operators, and students from every background."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faculties.map((f) => (
            <Card
              key={f.title}
              className="border-white/10 bg-gradient-to-b from-card to-black/30 backdrop-blur-sm transition-transform hover:-translate-y-0.5"
            >
              <CardContent className="space-y-3 p-6">
                <h3 className="font-heading text-lg font-semibold text-white">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-2 lg:grid-cols-3">
          <p className="text-sm text-muted-foreground">
            Business students can build tools for startups, finance, sales, and
            operations.
          </p>
          <p className="text-sm text-muted-foreground">
            Health science students can build tools for research, clinics, and patient
            workflows.
          </p>
          <p className="text-sm text-muted-foreground">
            Engineering students can build prototypes, simulations, and technical
            products.
          </p>
          <p className="text-sm text-muted-foreground">
            Arts and media students can build creative tools, portfolios, and digital
            experiences.
          </p>
          <p className="text-sm text-muted-foreground">
            Computer science students can sharpen their skills through real projects.
          </p>
          <p className="text-sm text-muted-foreground">
            Founders can build faster, test ideas, and find collaborators.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
