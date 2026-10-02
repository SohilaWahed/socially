
import { dummyStories } from "@/dummy/storiesData";
import StoryItem from "./StoryItem";
import { useState } from "react";
import type { Story } from "@/types/feed.types";
import CreateStoryModal from "./CreateStoryModal";
import StoryModal from "./StoryModal";
import { useTranslation } from "react-i18next";

export default function Stories() {

  const { t } = useTranslation('feed');

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
      <div className="mb-6">
        {/* Header */}
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">{t("stories.title")}</h2>
          <button type="button" onClick={() => setSelectedStoryIndex(0)}
            className="text-xs font-medium text-primary transition hover:text-secondary">
            {t("stories.viewAll")}
          </button>
        </div>
        {/* Stories */}
        <div className=" flex gap-4 overflow-x-auto pb-2 scrollbar-none">
          <StoryItem isCreate onClick={() => setIsCreateModalOpen(true)} />
          {stories.map((story, index) => (
            <StoryItem
              key={story.id}
              story={story}
              onClick={() => openStory(index)}
            />
          ))}
        </div>
      </div>
      {/* Created Modal */}
      {
        isCreateModalOpen && (
          <CreateStoryModal onClose={setIsCreateModalOpen} />
        )
      }
      {/* Story Modal */}
      {
        selectedStoryIndex !== null && (
          <StoryModal
            stories={stories}
            currentIndex={selectedStoryIndex}
            onClose={() => setSelectedStoryIndex(null)}
            onNext={goToNextStory}
            onPrevious={goToPreviousStory} />
        )
      }
    </>
  )
}
