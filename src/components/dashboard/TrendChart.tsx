import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { TREND_SERIES } from '../../data/trafficDemoData'

export function TrendChart() {
  return (
    <div style={{ width: '100%', height: 160 }}>
      <ResponsiveContainer>
        <LineChart data={TREND_SERIES} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="rgba(184,212,235,0.08)" vertical={false} />
          <XAxis dataKey="hour" tick={{ fill: '#8b9bb0', fontSize: 11 }} axisLine={false} />
          <YAxis tick={{ fill: '#8b9bb0', fontSize: 11 }} axisLine={false} domain={[0, 100]} />
          <Tooltip
            contentStyle={{
              background: '#101c2a',
              border: '1px solid rgba(184,212,235,0.2)',
              borderRadius: 8,
            }}
            formatter={(value) => [`${String(value)} (illustrative)`, 'Congestion index']}
          />
          <Line type="monotone" dataKey="index" stroke="#7ef0c8" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
