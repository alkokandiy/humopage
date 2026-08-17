import { useEffect, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';

const ROLES = ['Manager', 'Engineer', 'Designer', 'Driver'];

export default function Join() {
  const reduced = useReducedMotion();
  const [role, setRole] = useState(0);

  useEffect(() => {
    if (reduced) return undefined;
    const id = setInterval(() => setRole((r) => (r + 1) % ROLES.length), 2500);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <section id="join" className="relative flex items-center bg-navy py-36">
      <div className="container-x text-center">
        <h2 className="display-2xl text-white">Join the team</h2>
        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/85">
          Grow your future and become our{' '}
          <span key={ROLES[role]} className="role-swap inline-block text-gold">
            {ROLES[role]}
          </span>
          .
        </p>
        <div className="mt-12 flex justify-center">
          <a
            href="#join-full"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 font-display text-sm font-bold uppercase tracking-display text-ink transition-[filter] hover:brightness-110"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}