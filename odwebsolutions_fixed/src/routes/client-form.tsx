import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ClientForm } from "@/components/site/ClientForm";

export const Route = createFileRoute("/client-form")({
  component: ClientFormPage,
  head: () => ({
    meta: [
      { title: "Client Information Form — OD Web Solutions" },
      {
        name: "description",
        content:
          "Complete your client information form after accepting your quote with OD Web Solutions.",
      },
    ],
  }),
});

function ClientFormPage() {
  return (
    <main className="bg-ink-deep text-foreground overflow-x-hidden">
      <Nav />
      <ClientForm />
      <Footer />
    </main>
  );
}
