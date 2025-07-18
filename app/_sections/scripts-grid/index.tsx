import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  ExternalLink,
  BookOpen,
  PenTool,
  Calculator,
  Mic,
  FileText,
  Gamepad2,
  Code,
  Moon,
} from "lucide-react"

const scripts = [
  {
    id: 1,
    name: "Tarefa SP",
    description: "Ferramenta para concluir as tarefas",
    version: "v2.1.0",
    category: "Produtividade",
    icon: BookOpen,
    gradient: "from-blue-500 to-cyan-500",
    downloads: "1.2k",
  },
  {
    id: 2,
    name: "Redação SP",
    description: "Ferramenta para concluir as redações",
    version: "v1.8.3",
    category: "Escrita",
    icon: PenTool,
    gradient: "from-green-500 to-emerald-500",
    downloads: "890",
  },
  {
    id: 3,
    name: "Khanware",
    description: "Ferramenta para concluir o Khan",
    version: "v3.1.1",
    category: "Matemática",
    icon: Calculator,
    gradient: "from-orange-500 to-red-500",
    downloads: "2.1k",
  },
  {
    id: 4,
    name: "Speak",
    description: "Ferramenta para concluir o Speak",
    version: "v1.5.2",
    category: "Idiomas",
    icon: Mic,
    gradient: "from-purple-500 to-pink-500",
    downloads: "756",
  },
  {
    id: 5,
    name: "Leia SP",
    description: "Ferramenta para concluir o Leia SP",
    version: "v2.0.1",
    category: "Leitura",
    icon: FileText,
    gradient: "from-indigo-500 to-blue-500",
    downloads: "1.5k",
  },
  {
    id: 6,
    name: "Matific",
    description: "Ferramenta para concluir o Matific",
    version: "v1.9.4",
    category: "Matemática",
    icon: Gamepad2,
    gradient: "from-yellow-500 to-orange-500",
    downloads: "934",
  },
  {
    id: 7,
    name: "Alura",
    description: "Ferramenta para concluir o Alura",
    version: "v3.2.0",
    category: "Programação",
    icon: Code,
    gradient: "from-teal-500 to-green-500",
    downloads: "3.2k",
  },
  {
    id: 8,
    name: "Expansão Noturno",
    description: "Ferramenta para concluir o Expansão",
    version: "v1.3.7",
    category: "Extensão",
    icon: Moon,
    gradient: "from-gray-600 to-gray-800",
    downloads: "567",
  },
]

export default function ScriptsGrid() {
  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Scripts Disponíveis</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Automatize suas atividades educacionais com nossa coleção de scripts especializados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {scripts.map((script) => {
            const IconComponent = script.icon
            return (
              <Card
                key={script.id}
                className="bg-gray-900/50 border-gray-800 rounded-2xl hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${script.gradient} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-gray-800 text-gray-300 rounded-full">
                      {script.version}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg font-semibold">{script.name}</CardTitle>
                  <CardDescription className="text-gray-400 text-sm">{script.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-purple-500/50 text-purple-300 rounded-full">
                      {script.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{script.downloads} downloads</span>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-xl border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
