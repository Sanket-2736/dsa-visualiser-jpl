import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowRight, Trash2, Search, List } from "lucide-react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const QueuePage = () => {
  const [queue, setQueue] = useState([]);
  const [value, setValue] = useState("");
  const [steps, setSteps] = useState([]);
  const [front, setFront] = useState(null);
  const [size, setSize] = useState(0);

  const fetchQueue = async () => {
    console.log("🔄 Fetching queue data...");
    try {
      const [queueRes, stepRes, frontRes, sizeRes] = await Promise.all([
        axios.get(`${BACKEND_URL}/api/queue`),
        axios.get(`${BACKEND_URL}/api/queue/steps`),
        axios.get(`${BACKEND_URL}/api/queue/front`),
        axios.get(`${BACKEND_URL}/api/queue/size`)
      ]);

      console.log("📦 Queue:", queueRes.data);
      console.log("🪜 Steps:", stepRes.data);
      console.log("🔍 Front:", frontRes.data[0]);
      console.log("🔢 Size:", sizeRes.data);

      setQueue(queueRes.data);
      setSteps(stepRes.data);
      setFront(frontRes.data[0]);
      setSize(sizeRes.data);
    } catch (error) {
      console.error("❌ Error fetching queue data:", error);
    }
  };

  useEffect(() => {
    fetchQueue();
  }, []);

  const handleEnqueue = async () => {
    if (value.trim() === "") return;
    console.log("➕ Enqueue clicked. Value:", value);
    try {
      await axios.post(`${BACKEND_URL}/api/queue/enqueue`, null, {
        params: { value: parseInt(value) }
      });
      console.log("✅ Enqueue successful");
      setValue("");
      fetchQueue();
    } catch (error) {
      console.error("❌ Error during enqueue:", error);
    }
  };

  const handleDequeue = async () => {
    console.log("➖ Dequeue clicked.");
    try {
      await axios.delete(`${BACKEND_URL}/api/queue/dequeue`);
      console.log("✅ Dequeue successful");
      fetchQueue();
    } catch (error) {
      console.error("❌ Error during dequeue:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Queue Simulation
        </motion.h1>
        <motion.p
          className="text-lg text-indigo-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Perform operations on a Queue: Enqueue, Dequeue, Peek Front, and visualize steps.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
          <input
            type="number"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              console.log("✏️ Input changed to:", e.target.value);
            }}
            placeholder="Enter value"
            className="bg-gray-800 text-white px-4 py-2 rounded-md border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleEnqueue}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-md flex items-center gap-2 transition-all"
          >
            <ArrowRight size={18} /> Enqueue
          </button>
          <button
            onClick={handleDequeue}
            className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-md flex items-center gap-2 transition-all"
          >
            <Trash2 size={18} /> Dequeue
          </button>
        </div>

        <motion.div
          className="bg-indigo-800/20 p-6 rounded-xl shadow-lg border border-indigo-700/30 backdrop-blur-md mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-indigo-300 mb-3">Current Queue</h3>
          {queue.length === 0 ? (
            <p className="text-sm text-gray-300">The queue is empty</p>
          ) : (
            <div className="flex gap-3 justify-center flex-wrap">
              {queue.map((val, index) => (
                <motion.div
                  key={index}
                  className="bg-indigo-700 px-4 py-2 rounded-lg text-white shadow-md"
                  whileHover={{ scale: 1.1 }}
                >
                  {val}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="bg-gray-800 p-5 rounded-xl border border-indigo-700/40"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-indigo-400 mb-3 flex items-center gap-2">
              <Search size={18} /> Front Element
            </h4>
            <p className="text-white text-xl">{front !== undefined && front !== null ? front : "N/A"}</p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-5 rounded-xl border border-indigo-700/40"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-indigo-400 mb-3 flex items-center gap-2">
              <List size={18} /> Queue Size
            </h4>
            <p className="text-white text-xl">{size}</p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 bg-indigo-800/10 border border-indigo-700/30 p-6 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-indigo-400 mb-4">Iteration Steps</h3>
          <ul className="text-indigo-200 text-sm list-disc list-inside space-y-1 text-left">
            {steps.length === 0 ? (
              <li>No steps available</li>
            ) : (
              steps.map((step, index) => <li key={index}>{step}</li>)
            )}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default QueuePage;
