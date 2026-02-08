import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Bienvenido a InmiJobs</h1>
          <p className="text-zinc-400 text-lg mb-8">
            Plataforma de ejemplo para gestionar transferencias y autenticación.
          </p>
          <div className="space-y-4">
            <a href="/ping" className="inline-block px-6 py-3 bg-indigo-600 rounded-lg font-semibold">Ir a Tests</a>
          </div>
        </div>
      </div>
    </div>
  )
}
