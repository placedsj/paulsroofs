import React from 'react';

export default function PaulsRoofingLogo({ className = "h-16 w-16" }: { className?: string }) {
    return (
        <div className={className}>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                {/* Background Circle */}
                <circle cx="50" cy="50" r="49" fill="#0d2e57" />

                {/* Outer Ring */}
                <circle cx="50" cy="50" r="47" stroke="#38bdf8" strokeWidth="3" fill="none" />

                {/* Roof Icon */}
                <g transform="translate(0, -2)">
                    <path
                        d="M 25 55 L 50 35 L 75 55 L 75 58 L 25 58 Z"
                        fill="#38bdf8"
                        stroke="#0d2e57"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                    {/* Windows */}
                    <rect x="38" y="45" width="6" height="6" fill="#0d2e57" rx="1" />
                    <rect x="56" y="45" width="6" height="6" fill="#0d2e57" rx="1" />
                </g>

                {/* Text: PAUL'S */}
                <text
                    x="50"
                    y="75"
                    fontFamily="Arial, sans-serif"
                    fontSize="14"
                    fontWeight="bold"
                    fill="white"
                    textAnchor="middle"
                    letterSpacing="1"
                >
                    PAUL'S
                </text>

                {/* Separator Line */}
                <line x1="35" y1="80" x2="65" y2="80" stroke="#38bdf8" strokeWidth="1" />

                {/* Text: ROOFING */}
                <text
                    x="50"
                    y="88"
                    fontFamily="Arial, sans-serif"
                    fontSize="7"
                    fontWeight="bold"
                    fill="white"
                    textAnchor="middle"
                    letterSpacing="2"
                >
                    ROOFING
                </text>
            </svg>
        </div>
    );
}
