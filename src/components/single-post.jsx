import { Link } from "react-router-dom";

function SinglePost() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-500 leading-tight tracking-tight">
            TEAMLEIDER
            <br />
            VOEDINGSMIDDELENINDUSTRIE
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-purple-500">
            <span>’s-Hertogenbosch</span>
            <span>• Dagdienst</span>
            <span>• Leidinggevende</span>
            <span>• € 3.500 – 4.400 bruto p.m.</span>
          </div>

          <Link
            to="/solliciteren"
            className="inline-block bg-purple-500 text-slate-900 font-semibold px-8 py-3 rounded-full hover:bg-purple-500 transition"
          >
            Solliciteer direct
          </Link>

          <p className="text-slate-300 max-w-2xl leading-relaxed">
            Ben jij een motiverende leider die energie krijgt van een dynamische
            productieomgeving? Als Teamleider stuur jij jouw team aan in een
            moderne productieruimte en zorg je voor structuur, kwaliteit en
            resultaat. Je werkt in ploegendienst en kunt een salaris verdienen
            tot €4.375,- per maand.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-purple-500 mb-4">
              Dit ga je doen
            </h2>
            <ul className="space-y-3 text-slate-300 list-disc list-inside">
              <li>Aansturen, coachen en motiveren van jouw team;</li>
              <li>Bewaken van planning, veiligheid en productkwaliteit;</li>
              <li>
                Snel schakelen bij productwissels en dagelijkse uitdagingen;
              </li>
              <li>Duidelijke communicatie en overdracht tussen ploegen;</li>
              <li>Meedenken in procesverbeteringen en teamontwikkeling.</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-800/70 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl">
          <div className="w-32 h-32 rounded-full bg-slate-700 mb-4" />

          <h3 className="text-xl font-bold text-purple-500">Dani van Kraaij</h3>
          <p className="text-slate-400 text-sm mb-6">Recruitment consultant</p>

          <button className="bg-purple-500 text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-purple-500 transition mb-4">
            Ik wil meer info
          </button>

          <div className="flex gap-4 text-purple-500">
            <span className="cursor-pointer hover:text-emerald-300">✉</span>
            <span className="cursor-pointer hover:text-emerald-300">☎</span>
            <span className="cursor-pointer hover:text-emerald-300">💬</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
