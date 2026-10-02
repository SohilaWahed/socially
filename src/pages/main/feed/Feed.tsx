import { getMyProfile } from "@/apis/user.apis";
import FeedHeader from "@/components/feed/FeedHeader";
import Stories from "@/components/feed/stories/Stories";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { useQuery } from "@tanstack/react-query";

export default function Feed() {
  
  const { data: userData, isLoading, isError, error } = useQuery({
    queryKey: ['get-my-profile'],
    queryFn: getMyProfile,
    retry: 3,
  })

  console.log(userData)

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) {
    const msg = getErrorMessage(error);
    return <div className="error-banner">{msg}</div>;
  }

  return (

    <main className="min-h-screen bg-background overflow-hidden relative w-full">
      {/* Aurora Background  */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -left-32 -top-32
            h-96 w-96 rounded-full
            bg-primary/15 blur-[120px]
          "
        />
        <div
          className="absolute right-0 top-1/3
            h-80 w-80 rounded-full 
            bg-secondary/15 blur-[120px]
          "
        />
        <div
          className="absolute bottom-0 left-1/3
            h-72 w-72 rounded-full
            bg-accent/15 blur-[120px]
          "
        />
      </div>
      {/* Feed */}
      <div
        className="relative z-10 mx-auto
          flex w-full max-w-7xl
          gap-6 px-4 py-6
          sm:px-6 lg:px-8
        "
      >
        {/* Header and Story */}
        {userData && <section className="min-w-0 flex-1">
          <FeedHeader name={userData.data.user.name} />
          <Stories />
        </section>}

      </div>
    </main>
  )
}
