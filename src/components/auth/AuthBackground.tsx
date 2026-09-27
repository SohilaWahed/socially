
export default function AuthBackground() {
  return (

    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-background">
        {/* Aurora - primary */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
        {/* Aurora - secondary */}
        <div className="absolute -right-25 top-1/3 h-96 w-96 rounded-full bg-secondary/30 blur-[120px]" />
        {/* Aurora - Accent */}
        <div className="absolute -bottom-37.5 left-1/3 h-96 w-96 rounded-full bg-accent/20 blur-[130px]" />
        {/* Grid */}
        <div className=" absolute inset-0 opacity-[0.035] 
            bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
            bg-size:40px_40px "/>
      </div>
    </div>
  )
}
