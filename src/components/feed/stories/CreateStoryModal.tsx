import { ImagePlus, X } from "lucide-react"
import { useState, type ChangeEvent } from "react"

interface CreateStoryModalProps {
    onClose: (isCreateModalOpen: boolean) => void
}
export default function CreateStoryModal({ onClose }: CreateStoryModalProps) {

    const [image, setImage] = useState<string>("")
    const [text, setText] = useState<string>("")


    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return null
        const imageUrl = URL.createObjectURL(file)
        setImage(imageUrl)
    }

    const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        console.log('create')
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            onClick={() => onClose(false)}>
            <div className="w-full max-w-lg rounded-card 
                border border-glass-border bg-surface p-5 shadow-2xl"
                onClick={(event) => event.stopPropagation()}
            >
                {/* Header */}
                <div className="mb-5">
                    <h2 className="text-lg font-semibold text-foreground">
                        Create Story
                    </h2>
                    <p className="mt-1 text-sm text-muted">
                        Share a moment with your followers.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={() => handleSubmit} className="space-y-4">
                    <label
                        className="relative flex aspect-square
                            cursor-pointer items-center
                            justify-center
                            overflow-hidden
                            rounded-card
                            border border-dashed
                            border-border
                            bg-background
                            transition
                            hover:border-primary
                            "
                    >
                        {image ? (
                            <>
                                <img
                                    src={image}
                                    alt="Story preview"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                                <button type="button" onClick={() => setImage('')}
                                    className="rounded-full p-2 text-muted transition bg- hover:bg-glass-active hover:text-foreground absolute top-1 inset-e-1">
                                    <X size={20} />
                                </button>
                            </>

                        ) : (
                            <div className="flex flex-col items-center gap-3 text-center">
                                <div className=" flex h-12 w-12
                                        items-center justify-center
                                        rounded-full
                                        bg-primary/10
                                        text-primary
                                    "
                                >
                                    <ImagePlus size={22} />
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-foreground">
                                        Add a photo
                                    </p>

                                    <p className="mt-1 text-xs text-muted">
                                        Click to choose an image
                                    </p>
                                </div>
                            </div>
                        )}

                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </label>

                    {/* Text */}
                    <div>
                        <label
                            htmlFor="story-text"
                            className="mb-2 block text-sm font-medium text-foreground"
                        >
                            Caption
                        </label>

                        <textarea
                            id="story-text"
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                            placeholder="Add something..."
                            maxLength={150}
                            rows={3}
                            className=" w-full resize-none
                                rounded-ui
                                border border-border
                                bg-background
                                px-4 py-3
                                text-sm text-foreground
                                outline-none
                                transition
                                placeholder:text-muted
                                focus:border-primary
                                focus:ring-4
                                focus:ring-primary/10
                            "
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={() => onClose(false)}
                            className=" flex-1 rounded-ui
                                border border-border
                                px-4 py-3
                                text-sm font-medium
                                text-foreground
                                transition
                                hover:bg-glass
                            "
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={!image && !text}
                            className=" flex-1 rounded-ui
                            bg-linear-to-r
                            from-primary to-secondary
                            px-4 py-3
                            text-sm font-semibold
                            text-white
                            shadow-lg shadow-primary/20
                            transition
                            hover:brightness-110
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                        >
                            Create Story
                        </button>
                    </div>

                </form>

            </div>
        </div>
    )
}
