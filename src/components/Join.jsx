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
  const [selectedDivision, setSelectedDivision] = useState('');

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: '' }));
  };

  const handleDivisionClick = (div) => {
    setSelectedDivision(div);
    setForm((f) => ({ ...f, division: div }));
    setErrors((er) => ({ ...er, division: '' }));
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
      <section id="join" className="section-obsidian-alt relative overflow-hidden">
        <div className="container-x text-center py-32">
          <div className="mx-auto max-w-md">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-aether/15">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-8 w-8 text-aether">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="display-2xl text-white">APPLICATION SENT</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-60">
              Thank you, <span className="font-semibold text-gold">{form.name}</span>. We will review your application and get back to you soon.
            </p>
            <button
              type="button"
              onClick={() => {
                setForm(INITIAL_FORM);
                setSelectedDivision('');
                setSubmitted(false);
              }}
              className="btn-outline mt-8"
            >
              Submit another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="section-obsidian-alt relative overflow-hidden">
      <div className="container-x py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left column — copy + division buttons */}
          <div>
            <span className="eyebrow text-aether">OPEN POSITIONS</span>
            <h2 className="display-2xl mt-4 text-white">JOIN THE TEAM</h2>
            <div className="hairline-aether mt-6 w-16" />
            <div className="mt-8 max-w-lg space-y-4 text-ink-60 leading-relaxed">
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
                <button
                  key={div}
                  type="button"
                  onClick={() => handleDivisionClick(div)}
                  className={`rounded-lg border px-3 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                    selectedDivision === div
                      ? 'border-aether/30 bg-aether/10 text-aether-light glow-aether'
                      : 'border-ink-10 bg-ink/[0.04] text-ink-40 hover:border-ink-20 hover:text-ink-30'
                  }`}
                >
                  {div}
                </button>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <div>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-panel p-6 sm:p-8"
            >
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="join-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink-30">
                    Full name *
                  </label>
                  <input
                    id="join-name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Muhammad Mahmudov"
                    className={`w-full rounded-lg border bg-ink-05 px-4 py-3 text-sm text-white placeholder:text-ink-20 focus:outline-none focus:ring-2 focus:ring-aether/50 ${
                      errors.name ? 'border-red-400/60' : 'border-ink-10'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="join-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink-30">
                    Email *
                  </label>
                  <input
                    id="join-email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@university.uz"
                    className={`w-full rounded-lg border bg-ink-05 px-4 py-3 text-sm text-white placeholder:text-ink-20 focus:outline-none focus:ring-2 focus:ring-aether/50 ${
                      errors.email ? 'border-red-400/60' : 'border-ink-10'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="join-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink-30">
                    Phone number *
                  </label>
                  <input
                    id="join-phone"
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+998 90 123 4567"
                    className={`w-full rounded-lg border bg-ink-05 px-4 py-3 text-sm text-white placeholder:text-ink-20 focus:outline-none focus:ring-2 focus:ring-aether/50 ${
                      errors.phone ? 'border-red-400/60' : 'border-ink-10'
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-300">{errors.phone}</p>}
                </div>

                {/* Major */}
                <div>
                  <label htmlFor="join-major" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink-30">
                    Major / Field of study *
                  </label>
                  <input
                    id="join-major"
                    type="text"
                    value={form.major}
                    onChange={update('major')}
                    placeholder="Mechanical Engineering"
                    className={`w-full rounded-lg border bg-ink-05 px-4 py-3 text-sm text-white placeholder:text-ink-20 focus:outline-none focus:ring-2 focus:ring-aether/50 ${
                      errors.major ? 'border-red-400/60' : 'border-ink-10'
                    }`}
                  />
                  {errors.major && <p className="mt-1 text-xs text-red-300">{errors.major}</p>}
                </div>

                {/* Division */}
                <div>
                  <label htmlFor="join-division" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink-30">
                    Desired division *
                  </label>
                  <select
                    id="join-division"
                    value={form.division}
                    onChange={update('division')}
                    className={`w-full appearance-none rounded-lg border bg-ink-05 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-aether/50 ${
                      errors.division ? 'border-red-400/60' : 'border-ink-10'
                    } ${!form.division ? 'text-ink-20' : ''}`}
                  >
                    <option value="" disabled>
                      Select a division
                    </option>
                    {TEAM_DIVISIONS.map((div) => (
                      <option key={div} value={div} className="bg-ink text-white">
                        {div}
                      </option>
                    ))}
                  </select>
                  {errors.division && <p className="mt-1 text-xs text-red-300">{errors.division}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="btn-gold mt-8 w-full"
              >
                Submit application
              </button>

              <p className="mt-4 text-center text-[0.7rem] text-ink-40">
                Data is stored locally in your browser for prototype purposes.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
