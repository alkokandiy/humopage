import { useState } from 'react';
import { TEAM_DIVISIONS } from '../data';

const STORAGE_KEY = 'humo_applications';

function getApplications() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveApplication(data) {
  const apps = getApplications();
  apps.push({ ...data, id: Date.now(), submittedAt: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
}

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  major: '',
  division: '',
};

export default function Join() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: '' }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'Name is required';
    if (!form.email.trim()) er.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Enter a valid email';
    if (!form.phone.trim()) er.phone = 'Phone number is required';
    if (!form.major.trim()) er.major = 'Major is required';
    if (!form.division) er.division = 'Select a division';
    return er;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const er = validate();
    if (Object.keys(er).length) {
      setErrors(er);
      return;
    }
    saveApplication(form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="join" className="relative bg-navy py-32">
        <div className="container-x text-center">
          <div className="mx-auto max-w-md">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-8 w-8 text-gold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="display-2xl text-white">Application sent</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Thank you, <span className="font-semibold text-gold">{form.name}</span>. We will review your application and get back to you soon.
            </p>
            <button
              type="button"
              onClick={() => {
                setForm(INITIAL_FORM);
                setSubmitted(false);
              }}
              className="mt-8 rounded-full border border-white/25 px-6 py-2.5 font-display text-sm font-bold uppercase tracking-display text-white transition-colors hover:border-gold hover:text-gold"
            >
              Submit another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="relative bg-navy py-28">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left column — copy */}
          <div>
            <p className="eyebrow mb-6 text-gold">Open positions</p>
            <h2 className="display-2xl text-white">Join the team</h2>
            <div className="hairline-gold mt-6 w-16" />
            <div className="mt-8 max-w-lg space-y-4 text-lg leading-relaxed text-white/70">
              <p>
                Humo Racing is recruiting across all ten divisions — from
                aerodynamics and powertrain to drivers and management.
              </p>
              <p>
                No experience required, just motivation. We will train you. Fill
                out the form and we will get in touch.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {TEAM_DIVISIONS.map((div) => (
                <div
                  key={div}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium uppercase tracking-wider text-white/50"
                >
                  {div}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <div>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-sm"
            >
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="join-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/40">
                    Full name *
                  </label>
                  <input
                    id="join-name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Muhammad Mahmudov"
                    className={`w-full rounded-lg border bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                      errors.name ? 'border-red-400/60' : 'border-white/10'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="join-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/40">
                    Email *
                  </label>
                  <input
                    id="join-email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@university.uz"
                    className={`w-full rounded-lg border bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                      errors.email ? 'border-red-400/60' : 'border-white/10'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="join-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/40">
                    Phone number *
                  </label>
                  <input
                    id="join-phone"
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+998 90 123 4567"
                    className={`w-full rounded-lg border bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                      errors.phone ? 'border-red-400/60' : 'border-white/10'
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-300">{errors.phone}</p>}
                </div>

                {/* Major */}
                <div>
                  <label htmlFor="join-major" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/40">
                    Major / Field of study *
                  </label>
                  <input
                    id="join-major"
                    type="text"
                    value={form.major}
                    onChange={update('major')}
                    placeholder="Mechanical Engineering"
                    className={`w-full rounded-lg border bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                      errors.major ? 'border-red-400/60' : 'border-white/10'
                    }`}
                  />
                  {errors.major && <p className="mt-1 text-xs text-red-300">{errors.major}</p>}
                </div>

                {/* Division */}
                <div>
                  <label htmlFor="join-division" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/40">
                    Desired division *
                  </label>
                  <select
                    id="join-division"
                    value={form.division}
                    onChange={update('division')}
                    className={`w-full appearance-none rounded-lg border bg-white/[0.06] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                      errors.division ? 'border-red-400/60' : 'border-white/10'
                    } ${!form.division ? 'text-white/25' : ''}`}
                  >
                    <option value="" disabled>
                      Select a division
                    </option>
                    {TEAM_DIVISIONS.map((div) => (
                      <option key={div} value={div} className="bg-navy text-white">
                        {div}
                      </option>
                    ))}
                  </select>
                  {errors.division && <p className="mt-1 text-xs text-red-300">{errors.division}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-gold py-3.5 font-display text-sm font-bold uppercase tracking-display text-ink transition-[filter] hover:brightness-110"
              >
                Submit application
              </button>

              <p className="mt-4 text-center text-[0.7rem] text-white/30">
                Data is stored locally in your browser for prototype purposes.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
