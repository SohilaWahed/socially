
import { dummyStories } from "@/dummy/storiesData";
import StoryItem from "./StoryItem";
import { useState } from "react";
import type { Story } from "@/types/feed.types";
import CreateStoryModal from "./CreateStoryModal";
import StoryModal from "./StoryModal";

export default function Stories() {

  const [stories, setStories] = useState<Story[]>(dummyStories)
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false)
 
  const openStory = (index: number) => {
    setSelectedStoryIndex(index)
    setStories((prev) => prev.map((story, storyIndex) =>
      storyIndex === index ? { ...story, isViewed: true } : story))
  }

  const goToNextStory = () => {
    setSelectedStoryIndex((currentIndex) => {
      if (currentIndex === null) {
        return null
      }
      if (currentIndex + 1 >= stories.length) {
        return null
      }
      return currentIndex + 1
    })
  }

  const goToPreviousStory = () => {
    setSelectedStoryIndex((currentIndex) => {
      if (currentIndex === null) {
        return null
      }
      if (currentIndex === 0) {
        return currentIndex
      }
      return currentIndex - 1
    })
  }

  return (
    <>
      <section className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">Stories</h2>
          <button type="button" onClick={()=>setSelectedStoryIndex(0)}
           className="text-xs font-medium text-primary transition hover:text-secondary">
            View all →
          </button>
        </div>
        <div className=" flex gap-4 overflow-x-auto pb-2 scrollbar-none">
          <StoryItem isCreate  onClick={() => setIsCreateModalOpen(true)} />
          {stories.map((story, index) => (
            <StoryItem
              key={story.id}
              story={story}
            onClick={() => openStory(index)}
            />
          ))}
        </div>
      </section>
      {
        isCreateModalOpen && (
          <CreateStoryModal onClose={setIsCreateModalOpen} />
        )
      }
      {
        selectedStoryIndex !== null && (
          <StoryModal
            stories={stories}
            currentIndex={selectedStoryIndex}
            onClose={setSelectedStoryIndex}
            onNext={goToNextStory}
            onPrevious={goToPreviousStory} />
        )
      }
    </>
  )
}
