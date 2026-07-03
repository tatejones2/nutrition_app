export function OnboardingStep({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <section className="onboarding-step">
      <span className="eyebrow">Athlete setup</span>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </section>
  );
}
