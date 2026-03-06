import React from "react";

export default function MidSide() {
  return (
    <div className="max-w-4xl "  >
      {/* Title */}
      <h1 className="text-2xl font-bold mb-2">Introduction to Ethical Hacking</h1>

      {/* Last Updated */}
      <p className="text-gray-500 mb-6">Last Updated : 28 Feb, 2026</p>

      {/* Description Paragraph */}
      <p className="mb-4 leading-relaxed text-gray-700">
        Ethical hacking is the authorized practice of testing systems, networks, and
        applications to identify and fix security weaknesses before malicious
        attackers exploit them. Ethical hackers use real hacking techniques with
        permission to strengthen cybersecurity and protect digital assets.
      </p>

      {/* Bullet Points */}
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
        <li>Legal and professional security testing</li>
        <li>Ethical hackers simulate real-world cyberattacks</li>
        <li>Helps identify vulnerabilities and weak points</li>
        <li>Strengthens an organization’s overall security posture</li>
        <li>Supports compliance with cybersecurity standards</li>
        <li>Builds resilience against modern cyber threats</li>
      </ul>

      {/* Subheading */}
      <h2 className="text-xl font-semibold mb-2">Key aspects of Ethical Hacking</h2>

      {/* Sub-paragraph */}
      <p className="mb-6 text-gray-700">
        These aspects ensure that ethical hacking remains structured, legal, and
        focused on improving cybersecurity.
      </p>

      {/* Example cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-orange-100 p-6 rounded-lg shadow-sm flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/80?text=1"
            alt="Permission Icon"
            className="w-20 h-20 object-contain"
          />
          <div>
            <h3 className="font-semibold text-lg">1. Permission</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-sm flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/80?text=2"
            alt="Methodology Icon"
            className="w-20 h-20 object-contain"
          />
          <div>
            <h3 className="font-semibold text-lg">2. Methodology</h3>
          </div>
        </div>
      </div>
    </div>
  );
}