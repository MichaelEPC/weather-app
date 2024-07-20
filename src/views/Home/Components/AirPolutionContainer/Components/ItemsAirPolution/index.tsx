import React, { useEffect } from "react";

interface ControlProps {
  name: string;
  quantitive: number;
}

function index({ name, quantitive }: ControlProps) {
  const [status, setStatus] = React.useState("");
  useEffect(() => {
    switch (name) {
      case "so2":
        if (quantitive > 0 && quantitive <= 20) {
          setStatus("Good");
        }
        if (quantitive > 20 && quantitive <= 80) {
          setStatus("Fair");
        }
        if (quantitive > 80 && quantitive <= 250) {
          setStatus("Moderate");
        }
        if (quantitive > 250 && quantitive <= 350) {
          setStatus("Poor");
        }
        if (quantitive > 350) {
          setStatus("Very poor");
        }
        break;

      case "no2":
        if (quantitive > 0 && quantitive <= 40) {
          setStatus("Good");
        }
        if (quantitive > 40 && quantitive <= 70) {
          setStatus("Fair");
        }
        if (quantitive > 70 && quantitive <= 150) {
          setStatus("Fair");
        }
        if (quantitive > 150 && quantitive <= 200) {
          setStatus("Moderate");
        }
        if (quantitive > 200) {
          setStatus("Very poor");
        }
        break;

      case "pm10":
        if (quantitive > 0 && quantitive <= 20) {
          setStatus("Good");
        }
        if (quantitive > 20 && quantitive <= 50) {
          setStatus("Fair");
        }
        if (quantitive > 50 && quantitive <= 100) {
          setStatus("Fair");
        }
        if (quantitive > 100 && quantitive <= 200) {
          setStatus("Moderate");
        }
        if (quantitive > 200) {
          setStatus("Very poor");
        }
        break;

      case "pm2_5":
        if (quantitive > 0 && quantitive <= 10) {
          setStatus("Good");
        }
        if (quantitive > 10 && quantitive <= 25) {
          setStatus("Fair");
        }
        if (quantitive > 25 && quantitive <= 50) {
          setStatus("Fair");
        }
        if (quantitive > 50 && quantitive <= 75) {
          setStatus("Moderate");
        }
        if (quantitive > 75) {
          setStatus("Very poor");
        }
        break;

      case "o3":
        if (quantitive > 0 && quantitive <= 60) {
          setStatus("Good");
        }
        if (quantitive > 60 && quantitive <= 100) {
          setStatus("Fair");
        }
        if (quantitive > 100 && quantitive <= 140) {
          setStatus("Fair");
        }
        if (quantitive > 140 && quantitive <= 180) {
          setStatus("Moderate");
        }
        if (quantitive > 180) {
          setStatus("Very poor");
        }
        break;

      case "co":
        if (quantitive > 0 && quantitive <= 4400) {
          setStatus("Good");
        }
        if (quantitive > 4400 && quantitive <= 9400) {
          setStatus("Fair");
        }
        if (quantitive > 9400 && quantitive <= 12400) {
          setStatus("Fair");
        }
        if (quantitive > 12400 && quantitive <= 15400) {
          setStatus("Moderate");
        }
        if (quantitive > 15400) {
          setStatus("Very poor");
        }
        break;

      default:
        setStatus("Unknown");
        break;
    }
  }, []);

  return (
    <div className="mt-4 flex flex-col items-center">
      <h4 className="text-3xl font-bold text-white">
        {name}: <span>{quantitive}</span>
      </h4>
      <p className="mt-1 text-3xl font-bold text-white">({status})</p>
    </div>
  );
}

export default index;
