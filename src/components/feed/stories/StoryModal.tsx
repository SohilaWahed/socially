import type { Story } from "@/types/feed.types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


interface StoryModalProps {
    stories: Story[]
    currentIndex: number
    onClose: () => void
    onNext: () => void
    onPrevious: () => void
}

const STORY_DURATION = 20_000

export default function StoryModal({ stories, currentIndex, onClose, onNext, onPrevious }: StoryModalProps) {

    const { t , i18n } = useTranslation('feed');

    const story = stories[currentIndex]
    const [progress, setProgress] = useState(0)

    useEffect(() => {

        const startAt = Date.now()

        const timer = setInterval(() => {
            const elapsed = Date.now() - startAt
            const currentProgress = Math.min(elapsed / STORY_DURATION, 1)
            setProgress(currentProgress)
            if (currentProgress >= 1) {
                clearInterval(timer)
                onNext()
            }
        }, 100)

        return () => {
            clearInterval(timer)
        }
    }, [currentIndex, onNext])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
            if (event.key === 'ArrowRight') {
                onNext()
            }

            if (event.key === 'ArrowLeft') {
                onPrevious()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }

    }, [onClose, onNext, onPrevious])

    return (
        <div className="absolute inset-x-0 top-0 z-80 flex items-center justify-center
         bg-surface px-4 pt-10 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="story-dialog-title">

            {/* Previous */}
            {currentIndex > 0 && (
                <button
                    type="button"
                    onClick={onPrevious}
                    className="absolute left-1 sm:left-3 top-1/2 z-20
                            -translate-y-1/2 rounded-full bg-black/30 p-2
                            text-white backdrop-blur-md
                            transition hover:bg-white/10
                        "
                    aria-label={t("stories.previousStory")}
                >
                   {i18n.language === 'en' ? <ChevronLeft size={24} /> :  <ChevronRight size={24} />} 
                </button>
            )}

            {/* Next */}
            <button
                type="button"
                onClick={onNext}
                className="absolute right-1 sm:right-3 top-1/2 z-20 -translate-y-1/2
                        rounded-full bg-black/30 p-2 text-white
                        backdrop-blur-md transition hover:bg-white/10
                    "
                aria-label={t("stories.nextStory")}
            >
                {i18n.language === 'en' ? <ChevronRight size={24} /> :  <ChevronLeft size={24} />} 

            </button>

            <div className="relative flex h-[80vh] max-h-150 w-full max-w-sm
                flex-col overflow-hidden rounded-card bg-background shadow-2xl"
                onClick={(event) => event.stopPropagation()}>


                {/* Progress */}
                <div className="absolute left-3 right-3 top-3 z-20">
                    <div className="h-1 overflow-hidden rounded-full bg-white/20">
                        <div className="h-full rounded-full
                            bg-white transition-[width] duration-100 ease-linear"
                            style={{
                                width: `${progress * 100}%`,
                            }}
                        />
                    </div>
                </div>

                {/* Story Header */}
                <div className="absolute top-0 left-0 right-0 z-10
                            flex items-center justify-between
                            bg-linear-to-b from-black/80 to-transparent
                            py-8 px-4 text-white">
                    <div className="flex items-center gap-2">
                        <img src={story.user.photo} alt="" className="h-8 w-8 rounded-full object-cover border border-white" />
                        <span className="text-sm font-semibold">{story.user.name}</span>
                    </div>
                    <button
                        type="button"
                        onClick={() => onClose()}
                        aria-label={t("stories.closeStory")}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-lg hover:bg-black/60"
                    >
                      <span aria-hidden="true"> ✕ </span>  
                    </button>
                </div>

                {/* Story Content */}
                <div className="flex h-full w-full items-center justify-center">
                    {story.image ? (
                        <div className="relative h-full w-full">
                            <img src={story.image} alt="" className="h-full w-full object-cover" />
                            {story.content && (
                                <p className="absolute bottom-6 left-4 right-4 rounded-xl bg-black/50 p-3 text-center text-sm font-medium text-white backdrop-blur-sm">
                                    {story.content}
                                </p>
                            )}
                        </div>
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary via-secondary to-accent p-6 text-center text-lg font-bold text-white">
                            {story.content}
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}
