function Result({ score, name }) {
  let title = "🌪 Protocol Wanderer";
  if (score === 5) title = "🧠 Intent Master";
  else if (score >= 3) title = "🔮 Anoma Mage";

  return (
    <div className="text-center space-y-4 p-6">
      <h1 className="text-3xl font-bold">Quiz Complete!</h1>
      <p className="text-xl">Hi {name}, you scored {score}/5</p>
      <p className="text-2xl font-semibold">{title}</p>
    </div>
  );
}

export default Result;
