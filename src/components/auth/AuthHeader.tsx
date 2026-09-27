interface AuthHeaderProps{
title:string,
 description:string,
}

export default function AuthHeader({title,  description}:AuthHeaderProps) {
  return (
    <div className="mb-7 text-center">
      {/* logo */}
      <div className=" mx-auto mb-5 h-12 w-12 rounded-card
          flex items-center justify-center
          bg-linear-to-br from-primary to-secondary
          text-lg font-bold text-white
          shadow-lg shadow-primary/20">
        S
      </div>
      {/* title */}
      <h1 className=" text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{title}</h1>
      {/* description */}
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
    </div>
  )
}
