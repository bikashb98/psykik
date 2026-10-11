import { SCENARIOS, type ScenarioId } from '../../data/trafficDemoData'

export function TrafficScenarioControls({
  value,
  onChange,
}: {
  value: ScenarioId
  onChange: (id: ScenarioId) => void
}) {
  return (
    <div className="scenario-controls" role="group" aria-label="Traffic scenario">
      {SCENARIOS.map((scenario) => (
        <button
          key={scenario.id}
          type="button"
          aria-pressed={value === scenario.id}
          onClick={() => onChange(scenario.id)}
        >
          {scenario.label}
        </button>
      ))}
    </div>
  )
}
