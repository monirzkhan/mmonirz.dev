
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const LoaderStack = ({ duration = 1400, onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
      if (typeof onComplete === 'function') {
        onComplete();
      }
    }, duration);

    return () => window.clearTimeout(timer);
  }, [duration, onComplete]);

  if (!visible) {
    return null;
  }

  return (
    <StyledWrapper aria-label="Loading project experience">
      <div className="backdrop" />
      <div className="loader-card">
        <div className="orbital">
          <div className="ring ring-one" />
          <div className="ring ring-two" />
          <div className="core" />
        </div>

        <div className="content">
          <p className="eyebrow">Project showcase</p>
          <h2>Preparing your experience</h2>
          <div className="bar">
            <span />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 34%),
    linear-gradient(135deg, #020617 0%, #0f172a 45%, #020617 100%);

  .backdrop {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
    background-size: 42px 42px;
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.9), transparent 90%);
  }

  .loader-card {
    position: relative;
    width: min(92vw, 420px);
    padding: 2.25rem 2rem;
    border-radius: 28px;
    border: 1px solid rgba(148, 163, 184, 0.2);
    background: rgba(15, 23, 42, 0.82);
    backdrop-filter: blur(18px);
    box-shadow: 0 24px 70px rgba(2, 6, 23, 0.62);
    overflow: hidden;
  }

  .loader-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, transparent 20%, rgba(255, 255, 255, 0.08) 50%, transparent 80%);
    transform: translateX(-120%);
    animation: sweep 1.4s ease-in-out infinite;
  }

  .orbital {
    position: relative;
    width: 120px;
    height: 120px;
    margin: 0 auto 1.5rem;
    animation: float 3.4s ease-in-out infinite;
  }

  .ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid transparent;
  }

  .ring-one {
    border-top-color: #8b5cf6;
    border-right-color: #38bdf8;
    animation: spin 2.2s linear infinite;
  }

  .ring-two {
    inset: 18px;
    border-bottom-color: #f59e0b;
    border-left-color: #ec4899;
    animation: spinReverse 1.8s linear infinite;
  }

  .core {
    position: absolute;
    inset: 29px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.26), rgba(99, 102, 241, 0.12));
    box-shadow: 0 0 30px rgba(56, 189, 248, 0.25);
  }

  .content {
    text-align: center;
  }

  .eyebrow {
    margin: 0 0 0.55rem;
    text-transform: uppercase;
    letter-spacing: 0.32em;
    font-size: 0.75rem;
    font-weight: 700;
    color: #8b5cf6;
  }

  h2 {
    margin: 0 0 1rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: #f8fafc;
  }

  .bar {
    height: 6px;
    border-radius: 999px;
    overflow: hidden;
    background: rgba(148, 163, 184, 0.16);
  }

  .bar span {
    display: block;
    width: 40%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #38bdf8, #6366f1, #f59e0b);
    animation: shimmer 1.15s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes spinReverse {
    to {
      transform: rotate(-360deg);
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(220%);
    }
  }

  @keyframes sweep {
    0% {
      transform: translateX(-120%);
    }
    100% {
      transform: translateX(120%);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }
`;

export default LoaderStack;
