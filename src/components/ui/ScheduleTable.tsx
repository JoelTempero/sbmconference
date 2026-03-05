import type { ScheduleEntry } from '../../types'

interface ScheduleTableProps {
  title: string
  entries: ScheduleEntry[]
}

export default function ScheduleTable({ title, entries }: ScheduleTableProps) {
  return (
    <div className="mb-10">
      <h2 className="font-heading text-2xl md:text-3xl text-primary mb-4 tracking-wide">
        {title}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="text-left py-3 px-4 font-heading text-sm md:text-base tracking-wide w-[180px]">
                Time
              </th>
              <th className="text-left py-3 px-4 font-heading text-sm md:text-base tracking-wide">
                Session
              </th>
              <th className="text-left py-3 px-4 font-heading text-sm md:text-base tracking-wide hidden md:table-cell">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, idx) => (
              <tr
                key={idx}
                className={`border-b border-gray-200 ${
                  entry.isKeynote
                    ? 'bg-secondary/5 font-semibold'
                    : entry.isMeal
                    ? 'bg-teal/5'
                    : idx % 2 === 0
                    ? 'bg-white'
                    : 'bg-gray-50'
                }`}
              >
                <td className="py-3 px-4 text-sm whitespace-nowrap align-top">
                  {entry.time}
                </td>
                <td className="py-3 px-4 text-sm">
                  {entry.isKeynote && (
                    <span className="inline-block bg-secondary text-white text-xs px-2 py-0.5 rounded mr-2 font-normal">
                      Keynote
                    </span>
                  )}
                  {entry.session}
                  <span className="md:hidden block text-xs text-gray-500 mt-1">
                    {entry.location}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-600 hidden md:table-cell">
                  {entry.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
