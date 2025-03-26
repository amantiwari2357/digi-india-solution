"use client";
import { useState } from "react";
import Image from "next/image";
import { Switch } from "@headlessui/react";
import "../style/ranking.css";

export default function Ranking() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="ranking-container">
      <h1 className="ranking-1">Expect Best Results <span>with Digi India</span></h1>
      <div className="ranking-content">
        
        <div className="ranking-card">
          <h2>Growth</h2>
          <div className="chart">
            <Image src="/images/before-growth.png" alt="Growth Chart" width={300} height={150} />
          </div>
          <p className="ranking-value">368677</p>
          <span>Annual Growth Rate</span>
        </div>

        <div className="ranking-toggle">
          {/* <p>BEFORE</p> */}
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`switch-toggle ${enabled ? "bg-yellow-400" : "bg-gray-700"}`}
          >
            <span className="toggle-circle"></span>
          </Switch>
          {/* <p>AFTER</p> */}
          <p className="ranking-value">5656</p>
          <span>Ranking Strength</span>
        </div>

        <div className="ranking-card">
          <h2>Growth</h2>
          <div className="chart">
            <Image src="/images/after-growth.png" alt="ROI Chart" width={300} height={150} />
          </div>
          <p className="ranking-value">23470</p>
          <span>Return on Investment</span>
        </div>
      </div>
    </div>
  );
}
