
export default function FeedHeader({name}:{name:string}) {
  return (
    <div className="mb-5">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Good morning, {name}
        <span className="ml-2">✨</span>
      </h1>

      <p className="mt-1 text-sm text-muted">
        Here’s what’s happening in your world.
      </p>
    </div>
  )
}
