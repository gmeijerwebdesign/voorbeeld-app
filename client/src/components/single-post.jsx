import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function SinglePost() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get("http://localhost:3000/data/test");

        const foundJob = res.data.find((v) => v.id === parseInt(id));
        setJob(foundJob || {});
      } catch (err) {
        console.log(err);
      }
    };
    fetchJob();
  }, [id]);

  if (job === null) return <div className="text-white">Laden...</div>;
  if (Object.keys(job).length === 0)
    return <div className="text-white">Vacature niet gevonden</div>;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="sm:max-w-7xl sm:mx-auto px-4 sm:px-6 py-6 sm:py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-xl sm:text-4xl font-extrabold text-purple-500 leading-tight tracking-tight">
            {job.title.toUpperCase()}
          </h1>

          <div className="flex flex-wrap flex-col sm:flex-row gap-4 text-sm text-purple-500">
            <span>• {job.location}</span>
            <span>• {job.shift}</span>
            <span>• {job.group}</span>
            <span>• {job.salary}</span>
          </div>

          <p className="text-slate-300 max-w-2xl leading-relaxed text-sm">
            {job.description}
          </p>
        </div>

        <div className="bg-slate-800/70 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl">
          <div className="w-32 h-32 rounded-full bg-red-500 mb-4" />
          <h3 className="text-xl font-bold text-purple-500">Dani van Kraaij</h3>
          <p className="text-slate-400 text-sm mb-6">Tech recruiter</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
