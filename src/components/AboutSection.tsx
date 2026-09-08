import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  HardDrive, 
  Server, 
  Layers,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1">
            01 / Background &amp; Focus
          </div>
          <h2 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 uppercase">
            Engineering Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main narrative block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-base leading-relaxed font-sans">
              <p>
                I build systems architecture-first — designing cohesive, deterministic software rather than loose scripts. 
                My focus spans <strong className="text-slate-100 font-semibold">LLM engineering</strong> (autonomous multi-agent DAGs, RAG, domain LoRA fine-tuning), 
                <strong className="text-slate-100 font-semibold"> backend infrastructure</strong> (Kafka event streaming, Docker, Kubernetes, microservice telemetry), 
                and <strong className="text-slate-100 font-semibold">edge computer vision</strong> (OpenCV, YOLO, TensorRT).
              </p>

              <p>
                A core principle running through my work is <strong className="text-emerald-400 font-semibold">local-first, sovereign AI compute</strong>. 
                From terminal-native coding assistants to quantized C++ desktop tools and offline VS Code extensions, 
                I design software that keeps data private, eliminates SaaS vendor lock-in, and maximizes local hardware throughput.
              </p>

              <p>
                Currently completing my B.Tech in Computer Science at Noida, India, I have combined lab research at <span className="text-slate-100 font-semibold">NCC Lab, IIT BHU</span> with industrial engineering internships.
              </p>
            </div>

            {/* Core Pillars List - Editorial Horizontal Row */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Core Engineering Tenets
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-slate-300">
                <div className="border-l-2 border-emerald-500 pl-3 py-0.5">
                  <div className="font-semibold text-slate-100">Architecture-First</div>
                  <div className="text-slate-400 text-[11px] mt-0.5 font-sans">End-to-end telemetry, stateful orchestration, and type safety.</div>
                </div>

                <div className="border-l-2 border-emerald-500 pl-3 py-0.5">
                  <div className="font-semibold text-slate-100">Local-First Compute</div>
                  <div className="text-slate-400 text-[11px] mt-0.5 font-sans">llama.cpp backends, on-device GGUF models, low latency.</div>
                </div>

                <div className="border-l-2 border-emerald-500 pl-3 py-0.5">
                  <div className="font-semibold text-slate-100">Linux &amp; POSIX Native</div>
                  <div className="text-slate-400 text-[11px] mt-0.5 font-sans">Containerized microservices, Bash scripts, IPC sockets.</div>
                </div>

                <div className="border-l-2 border-emerald-500 pl-3 py-0.5">
                  <div className="font-semibold text-slate-100">Observable Infrastructure</div>
                  <div className="text-slate-400 text-[11px] mt-0.5 font-sans">Prometheus metrics, OpenTelemetry, Grafana observability.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Clean Technical Summary Readout */}
          <div className="lg:col-span-5">
            <div className="border border-slate-800 bg-[#090d16] p-6 font-mono text-xs space-y-4">
              <div className="pb-3 border-b border-slate-800">
                <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                  Technical Readout
                </span>
              </div>

              <div className="space-y-3 divide-y divide-slate-800/60">
                <div className="pt-2 flex justify-between items-start gap-4">
                  <span className="text-slate-500 shrink-0">Engineer:</span>
                  <span className="text-slate-200 text-right font-medium">{PERSONAL_INFO.name}</span>
                </div>

                <div className="pt-3 flex justify-between items-start gap-4">
                  <span className="text-slate-500 shrink-0">Degree:</span>
                  <span className="text-slate-200 text-right">{PERSONAL_INFO.education}</span>
                </div>

                <div className="pt-3 flex justify-between items-start gap-4">
                  <span className="text-slate-500 shrink-0">Location:</span>
                  <span className="text-slate-200 text-right">{PERSONAL_INFO.location}</span>
                </div>

                <div className="pt-3 flex justify-between items-start gap-4">
                  <span className="text-slate-500 shrink-0">Specialization:</span>
                  <span className="text-emerald-400 text-right font-semibold">AI Systems &amp; Infrastructure</span>
                </div>

                <div className="pt-3 flex justify-between items-start gap-4">
                  <span className="text-slate-500 shrink-0">Research Lab:</span>
                  <span className="text-slate-200 text-right">NCC Lab, IIT BHU (1 Year)</span>
                </div>

                <div className="pt-3 flex justify-between items-start gap-4">
                  <span className="text-slate-500 shrink-0">Core Runtimes:</span>
                  <span className="text-slate-300 text-right">PyTorch, C++20, llama.cpp, FastAPI</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span className="text-slate-500">Status:</span>
                <span className="text-emerald-400 font-semibold">Open for AI / Infra opportunities</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
