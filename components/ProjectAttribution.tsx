import Image from "next/image";
import { partnerLogos } from "@/lib/showroom-content";
import type { Locale, Project } from "@/lib/site-types";

export function ProjectAttribution({ project, locale, compact = false }: { project: Project; locale: Locale; compact?: boolean }) {
  const clientLogo = project.clientLogoId ? partnerLogos.find((logo) => logo.id === project.clientLogoId && logo.kind === "client") : undefined;
  const collaborators = partnerLogos.filter((logo) => project.collaboratorIds?.includes(logo.id));
  if (!clientLogo && collaborators.length === 0) return null;

  return (
    <div className={`project-attribution ${compact ? "compact" : ""}`} aria-label={locale === "ar" ? "العميل والمتعاون" : "Client and collaborator"}>
      {clientLogo
        ? <figure className={`project-client-logo ${clientLogo.preferredSurface}`} data-logo-id={clientLogo.id}><Image unoptimized src={clientLogo.src} alt={clientLogo.name} width={720} height={320} /></figure>
        : <span className="project-client-text" aria-label={project.client[locale]}>{project.client[locale]}</span>}
      {collaborators.map((logo) => (
        <figure className={`project-collaborator-logo ${logo.preferredSurface} logo-${logo.id}`} data-logo-id={logo.id} key={logo.id}>
          <Image unoptimized src={logo.src} alt={logo.name} width={720} height={320} />
        </figure>
      ))}
    </div>
  );
}
