import {
  Download,
  ExternalLink,
  BookOpen,
  PenTool,
  Calculator,
  MessageSquare,
  FileText,
  Code,
  Moon,
} from "lucide-react"

const scripts = [
  {
    name: "Tarefa SP",
    description: "Ferramenta para concluir as tarefas",
    version: "v2.1.0",
    category: "Produtividade",
    downloads: "1.2k",
    icon: BookOpen,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Redação SP",
    description: "Ferramenta para concluir as redações",
    version: "v1.8.3",
    category: "Escrita",
    downloads: "856",
    icon: PenTool,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Khanware",
    description: "Ferramenta para concluir o Khan",
    version: "v3.1.1",
    category: "Matemática",
    downloads: "2.1k",
    icon: Calculator,
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Speak",
    description: "Ferramenta para concluir o Speak",
    version: "v1.5.2",
    category: "Idiomas",
    downloads: "743",
    icon: MessageSquare,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Leia SP",
    description: "Ferramenta para concluir o Leia SP",
    version: "v2.0.1",
    category: "Leitura",
    downloads: "934",
    icon: FileText,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    name: "Matific",
    description: "Ferramenta para concluir o Matific",
    version: "v1.9.4",
    category: "Matemática",
    downloads: "1.5k",
    icon: Calculator,
    gradient: "from-teal-500 to-green-500",
  },
  {
    name: "Alura",
    description: "Ferramenta para concluir o Alura",
    version: "v3.2.0",
    category: "Programação",
    downloads: "3.2k",
    icon: Code,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    name: "Expansão Noturno",
    description: "Ferramenta para concluir o Expansão",
    version: "v1.3.7",
    category: "Extensão",
    downloads: "567",
    icon: Moon,
    gradient: "from-violet-500 to-purple-500",
  },
]

export function ScriptsGrid() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Scripts Disponíveis</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ferramentas poderosas para automação e produtividade educacional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {scripts.map((script, index) => {
            const IconComponent = script.icon
            return (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                  }}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${script.gradient} flex items-center justify-center mb-4`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{script.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{script.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-lg">{script.category}</span>
                    <span className="text-xs text-gray-500">{script.version}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <Download className="w-4 h-4" />
                      <span>{script.downloads}</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                        <Download className="w-4 h-4 text-white" />
                      </button>
                      <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
