import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button"; // Ensure Button component is available
import { ArrowLeftIcon } from "@heroicons/react/24/outline"; // Heroicon
import CommentsSection from "@/components/CommentsSection";

const posts = [
  {
    id: 1,
    title: "AI in the Future of Gaming",
    content: `AI in the future of gaming is set to revolutionize how games are developed, played, and experienced. As technology advances, artificial intelligence will become increasingly sophisticated, driving more immersive, dynamic, and personalized gameplay. Here’s a glimpse of how AI will shape the future of gaming.`,
    date: "2024-8-10",
    readTime: "5 min read",
    image:
      "https://i.ytimg.com/vi/g703rPn2134/maxresdefault.jpg",
    author: {
      name: "Cameron",
      avatar: "https://i.pinimg.com/originals/b0/38/29/b03829420bdfe0db232d4b9c24311212.jpg", // New placeholder avatar
    },
  },
  {
    id: 2,
    title: "Action Games",
    content: `Action games are a genre of video games that emphasize fast-paced gameplay, physical challenges, and hand-eye coordination. Players often take control of a character or vehicle, engaging in combat, navigating obstacles, and completing tasks that require quick reflexes and strategic decision-making. These games typically involve high levels of intensity and energy, where success depends on the player’s ability to react swiftly and efficiently to in-game events.`,
    date: "2024-12-20",
    readTime: "7 min read",
    image:
      "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/01/best-action-adventure-games-2022.jpg",
    author: {
      name: "Sara",
      avatar: "https://i.pinimg.com/originals/5c/73/01/5c73011725e48f58ad60798c525803e3.png", // New placeholder avatar
    },
  },
  {
    id: 3,
    title: "Racing Games",
    content: `Racing games are a genre of video games focused on the competitive sport of racing vehicles. Players control cars, motorcycles, boats, or other vehicles as they race against time or other players through various tracks and environments. These games often emphasize speed, precision, and strategy, requiring players to navigate through tight corners, avoid obstacles, and use power-ups or boosts to gain an advantage.`,
    date: "2024-03-18",
    readTime: "6 min read",
    image:
      "https://www.lifewire.com/thmb/XHzuQbQEoT8sBwl91xYF6UyWsrU=/1920x1080/filters:no_upscale():max_bytes(150000):strip_icc()/offlinecars-asphalt8-5bf393bb46e0fb002650eb20.jpg",
    author: {
      name: "Ronaldo",
      avatar: "https://www.themodelskit.co.uk/wp-content/uploads/2021/01/shutterstock_128560034-1536x1152.jpg", // New placeholder avatar
    },
  },
  {
    id: 4,
    title: "Horror Games",
    content:
      "Horror games are a genre of video games designed to evoke fear, suspense, and tension in players. These games often immerse players in dark, unsettling environments where they must confront terrifying creatures, solve eerie puzzles, or survive against relentless threats. The gameplay typically focuses on atmosphere, sound design, and psychological elements, creating a sense of dread and unease. Players are often placed in vulnerable positions, with limited resources or abilities to defend themselves, making each encounter more nerve-wracking.",
    date: "2024-03-17",
    readTime: "8 min read",
    image:
      "https://gameranx.com/wp-content/uploads/2021/04/Layers-of-Fear.jpg",
    author: {
      name: "Ibrahim",
      avatar: "https://tse3.mm.bing.net/th?id=OIP.XMz8ddSs4I5FhuYsdcPWoAHaKJ&pid=Api&P=0&h=220", // New placeholder avatar
    },
  },
  {
    id: 5,
    title: "Puzzle Games",
    content: " Puzzle games are a genre of video games that challenge players problem-solving skills, logic, and critical thinking. These games typically require players to manipulate objects, find hidden patterns, or solve complex problems to progress through levels or achieve certain objectives. Unlike action-oriented games, puzzle games focus on mental challenges and strategic thinking, often offering a slower, more contemplative pace.",
    date: "2024-09-16",
    readTime: "6 min read",
    image:
      "http://www.gamersdecide.com/sites/default/files/authors/u141443/thewitness2.jpg",
    author: {
      name: "Jennifer",
      avatar: "https://thumbs.dreamstime.com/z/beautiful-woman-small-dress-black-20982274.jpg", // New placeholder avatar
    },
  },
  {
    id: 6,
    title: "Strategy Games",
    content: "Strategy games are a genre of video games that focus on tactical and strategic decision-making. These games require players to plan, manage resources, and think critically to achieve specific goals or objectives. Strategy games often involve controlling units or assets, making decisions about deployment, positioning, and timing, all while adapting to the actions of opponents or the game environment. The genre emphasizes long-term planning and thinking, as opposed to quick reflexes or fast-paced action.",
    date: "2024-05-8",
    readTime: "12 min read",
    image:
      "https://images.gamewatcherstatic.com/image/file/2/bd/98532/Best-WW2-Strategy-Games-Blitzkrieg.jpg",
    author: {
      name: "Livingston",
      avatar: "https://tse4.mm.bing.net/th?id=OIP.z0qimXIUizMAO-BiXc6RmAHaIk&pid=Api&P=0&h=220", // New placeholder avatar
    },
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

interface Props {
  params: { id: string };
}

export default function BlogPost({ params }: Props) {
  const post = posts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-4xl py-10 px-6 md:px-12 bg-transparent shadow-xl rounded-lg">
      <a href="/blog" className="inline-block mb-6">
        <Button
          variant="ghost"
          className="flex items-center text-gray-200 hover:text-black"
        >
          <ArrowLeftIcon className="mr-2 h-5 w-5" />
          Back
        </Button>
      </a>

      <div className="space-y-8">
        {/* Image Section */}
        <div className="relative max-w-full mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Author Info Section */}
        <div className="flex items-center space-x-4 mt-6">
          <div className="relative">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-14 w-14 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute right-0 bottom-0 bg-green-500 h-4 w-4 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <div className="font-semibold text-xl text-gray-600">
              {post.author.name}
            </div>
            <div className="text-sm text-gray-500">
              {post.date} · {post.readTime}
            </div>
          </div>
        </div>

        {/* Post Title */}
        <h1 className="text-4xl font-bold text-gray-200 mt-4">{post.title}</h1>

        {/* Post Content */}
        <div className="prose prose-lg prose-neutral dark:prose-invert mt-6 max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="mb-6 leading-relaxed text-lg text-gray-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
        {/* Comments Section */}
        <CommentsSection />
      </div>
    </article>
  );
}
