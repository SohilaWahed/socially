import type { Story } from "@/types/feed.types"
import { Plus } from "lucide-react"

interface StoryItemProps {
  isCreate?: boolean,
  story?: Story
  onClick:()=>void
}
export default function StoryItem({ isCreate, story, onClick }: StoryItemProps) {

  if (isCreate) {
    return (
      <>
        <button
          type="button"
          onClick={onClick}
          className="group flex w-16 shrink-0 flex-col items-center gap-2"
        >
          <div
            className="
            flex h-16 w-16 items-center justify-center
            rounded-full border-2 border-primary
            bg-glass
            transition group-hover:bg-glass-active
          "
          >
            <Plus className="text-primary" size={24} />
          </div>

          <span className="max-w-16 truncate text-xs text-muted">
            Your story
          </span>
        </button>

      </>
    )
  }

  if (!story) return null

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="group flex w-16 shrink-0 flex-col items-center gap-2"
      >
        <div
          className={`
          rounded-full p-0.5
          ${story.isViewed
              ? "bg-border"
              : "bg-linear-to-br from-primary via-accent to-secondary"
            }
        `}
        >
          <div className="rounded-full bg-background p-0.5">
            <img
              src={story.user.photo}
              alt={story.user.name}
              className="h-14 w-14 rounded-full object-cover"
            />
          </div>
        </div>

        <span className="w-16 truncate text-xs text-muted transition group-hover:text-foreground">
          {story.user.name}
        </span>
      </button>
    </>
  )
}
