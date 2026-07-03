import { HiOutlineCalendar } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { BsBuildings } from "react-icons/bs";
import { experiences } from "./experienceData";
import ElectricBorder from "./ElectricBorder";

export default function Experience() {
  return (
    <section
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
      id="experience"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(6, 11, 34, 0.98), rgba(15, 23, 42, 0.95))",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 text-center md:text-left">
          <span className="inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-violet-200">
            Work History
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Work <span className="text-violet-400">Experience</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base md:mx-0">
            A few placeholder roles that reflect the style and direction of the portfolio while the real details are being finalized.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {experiences.map((job) => (
            <ElectricBorder
              key={job.id}
              color="#7df9ff"
              speed={1}
              chaos={0.12}
              borderRadius={24}
              className="experience-card group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.35)] backdrop-blur-xl"
            >
              <div className="absolute  inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400" />

              <div className="flex items-center justify-between gap-2 ">
                <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2 py-1 text-[4px] font-semibold uppercase tracking-[0.25em] text-violet-200">
                  {job.type}
                </span>
                {job.current && (
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[1px] font-semibold uppercase tracking-[0.25em] text-emerald-200">
                    Current
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">{job.role}</h3>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <BsBuildings className="text-violet-300" />
                  {job.company}
                </span>
                <span className="flex items-center gap-2">
                  <HiOutlineMapPin className="text-violet-300" />
                  {job.location}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                <HiOutlineCalendar className="text-cyan-300" />
                <span>
                  {job.start} - {job.end}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-300">{job.description}</p>

              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                {job.achievements.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  );
}