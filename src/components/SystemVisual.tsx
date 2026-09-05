import { motion } from "framer-motion";
import { FaLaptop, FaServer, FaDatabase, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const nodes = [
  { id: "client", label: "Client App", sub: "React / Next.js", icon: FaLaptop, status: "Active" },
  { id: "api", label: "REST / Socket API", sub: "Gateway", icon: FaArrowRight, status: "Connected" },
  { id: "server", label: "Node / Express", sub: "Core Server", icon: FaServer, status: "Running" },
  { id: "db", label: "MongoDB & AI", sub: "Persistence / LLM", icon: FaDatabase, status: "Synced" },
];

const SystemVisual = () => {
  const [activeNode, setActiveNode] = useState<string | null>("api");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-lg mx-auto bg-[color:var(--color-bg-card)]/90 border border-[color:var(--color-border)]/90 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-md"
    >
      {/* Top Window Control Bar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[color:var(--color-border)]/80">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-border-strong)]/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-border-strong)]/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-border-strong)]/80 inline-block"></span>
        </div>
        <span className="font-mono text-xs text-[color:var(--color-text-muted)] font-medium">system_flow.ts</span>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-[color:var(--color-accent)]">
          <span className="w-2 h-2 rounded-full bg-[color:var(--color-accent)] animate-pulse"></span>
          <span>LIVE FLOW</span>
        </div>
      </div>

      {/* System Node Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative my-2">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isSelected = activeNode === node.id;
          return (
            <div
              key={node.id}
              onMouseEnter={() => setActiveNode(node.id)}
              className={`relative flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "bg-[color:var(--color-bg-surface)] border-[color:var(--color-accent-strong)]/50 text-[color:var(--color-on-accent)] shadow-lg shadow-[color:var(--color-accent-strong)]/10"
                  : "bg-[color:var(--color-bg)]/80 border-[color:var(--color-border)]/90 text-[color:var(--color-text-tertiary)] hover:border-[color:var(--color-border-strong)]"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 transition-colors ${
                  isSelected ? "bg-[color:var(--color-accent-strong)]/20 text-[color:var(--color-accent)]" : "bg-[color:var(--color-border)]/60 text-[color:var(--color-text-tertiary)]"
                }`}
              >
                <Icon size={16} />
              </div>
              <span className="text-xs font-bold text-center leading-tight">{node.label}</span>
              <span className="text-[10px] font-mono text-[color:var(--color-text-muted)] mt-0.5">{node.sub}</span>

              {/* Connecting animated dot indicator  */}
              {index < nodes.length - 1 && (
                <div className="hidden sm:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent)]/70 animate-ping inline-block" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Animated Stream Status Bar */}
      <div className="mt-4 p-3 bg-[color:var(--color-bg)] rounded-xl border border-[color:var(--color-border)]/80 font-mono text-[11px] space-y-1.5">
        <div className="flex items-center justify-between text-[color:var(--color-text-tertiary)]">
          <span className="text-[color:var(--color-text-muted)]">EVENT LOG</span>
          <span className="text-[color:var(--color-accent)] font-semibold">200 OK — 12ms</span>
        </div>
        <div className="text-[color:var(--color-text-secondary)] flex items-center justify-between">
          <span className="text-[color:var(--color-text-tertiary)] truncate">
            {activeNode === "client" && "REQ: GET /api/v1/dashboard"}
            {activeNode === "api" && "GATEWAY: JWT Auth & RBAC Check"}
            {activeNode === "server" && "PROCESS: Socket.IO Broadcast"}
            {activeNode === "db" && "QUERY: Mongo Replica & OpenAI"}
            {!activeNode && "SYSTEM: Operational"}
          </span>
          <span className="text-[color:var(--color-accent)] shrink-0 ml-2">STREAMING</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SystemVisual;
