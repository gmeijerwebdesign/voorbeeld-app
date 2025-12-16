import { Link } from "react-router-dom";

function SinglePost() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="sm:max-w-7xl sm:mx-auto px-4 sm:px-6 py-6 sm:py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-xl sm:text-4xl font-extrabold text-purple-500 leading-tight tracking-tight">
            FULLSTACK
            <br />
            DEVELOPER
          </h1>

          <div className="flex flex-wrap flex-col sm:flex-row gap-4 text-sm text-purple-500">
            <span>• Amsterdam</span>
            <span>• Hybride</span>
            <span>• IT / Softwareontwikkeling</span>
            <span>• € 4.000 – 5.500 bruto p.m.</span>
          </div>

          <Link
            to="/solliciteren"
            className="inline-block bg-purple-500 text-slate-900 font-semibold px-8 py-3 rounded-full hover:bg-purple-500 transition"
          >
            Solliciteer direct
          </Link>

          <p className="text-slate-300 max-w-2xl leading-relaxed text-sm">
            Ben jij een ervaren Fullstack Developer die energie krijgt van het
            bouwen van schaalbare webapplicaties? In deze rol werk je aan zowel
            de front-end als back-end van moderne platforms en krijg je veel
            vrijheid om mee te denken over architectuur, performance en
            gebruikerservaring.
          </p>

          <div>
            <h2 className="text-xl font-bold text-purple-500 mb-4">
              Dit ga je doen
            </h2>
            <ul className="space-y-3 text-slate-300 list-disc list-inside text-sm">
              <li>
                Ontwikkelen en onderhouden van front-end en back-end
                applicaties;
              </li>
              <li>
                Werken met moderne frameworks zoals React, Node.js en/of
                Next.js;
              </li>
              <li>Ontwerpen en integreren van API’s en databases;</li>
              <li>Samenwerken met designers en product owners;</li>
              <li>
                Meedenken over technische keuzes, optimalisaties en security.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-800/70 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl">
          <div className="w-32 h-32 rounded-full bg-red-500 mb-4" />

          <h3 className="text-xl font-bold text-purple-500">Dani van Kraaij</h3>
          <p className="text-slate-400 text-sm mb-6">Tech recruiter</p>

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
