import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "AI in the Future of Gaming",
    excerpt: "AI is revolutionizing the future of games by enabling more adaptive, dynamic, and immersive experiences, with intelligent NPCs.",
    date: "2024-03-20",
    readTime: "20 Min Read",
    image: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/11/Best-AI-Characters-In-Video-Games.jpg",
    category: "Gaming Future"
  },
  {
    id: 2,
    title: "Action Games",
    excerpt: "An action game is a fast-paced video game focused close combat, reflex-based gameplay, and dynamic interactions with the environment.",
    date: "2024-03-19",
    readTime: "5 Min Read",
    image: "https://gameranx.com/wp-content/uploads/2020/03/CoDModernWarfareWarzone3.jpg",
    category: "Action"
  },
  {
    id: 3,
    title: "Racing Games",
    excerpt: "Creating a beautiful and functional user interface for a racing game involves designing intuitive controls, clear race information.",
    date: "2024-03-18",
    readTime: "2 Min Read",
    image: "https://img.redbull.com/images/c_crop,x_0,y_0,h_720,w_1080/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2020/6/18/jnhtjx1nozaocxki9ekx/ios-racers-lead-asphalt-9",
    category: "Racing"
  },
  {
    id: 4,
    title: "Horror Games",
    excerpt: "Horror games immerse players in tense, fear-inducing environments, using suspense, atmosphere, and psychological  fear and create experience.",
    date: "2024-03-17",
    readTime: "10 Min Read",
    image: "https://www.gamespace.com/wp-content/uploads/2019/10/spooky.jpg",
    category: "Horror"
  },
  {
    id: 5,
    title: " Puzzle Games",
    excerpt: "Puzzle games challenge players' logic and problem-solving skills, offering engaging scenarios where they solve and think creatively to progress.",
    date: "2024-03-16",
    readTime: "8 Min Read",
    image: "https://tse4.mm.bing.net/th?id=OIP.sPIStg5peOZ27vy4G9LUGgHaEK&pid=Api&P=0&h=220",
    category: "Puzzle"
  },
  {
    id: 6,
    title: "Strategy Games",
    excerpt: "Strategy games require players to plan, manage resources, and make tactical decisions to outsmart opponents and achieve objectives.",
    date: "2024-03-15",
    readTime: "15 Min Read",
    image: "https://assets.rockpapershotgun.com/images/2020/01/Endless-Legend-Best-strategy-games-2020.jpg",
    category: "Strategy"
  }
]

const BlogPage: React.FC = () => {
  return (
    <div className="animated-bg min-h-screen px-8">
      <div className="container py-10">
        <div className="relative mb-12 text-center">
          <h1 className="text-gradient text-4xl   text-white font-bold mb-4">FEATURED ARTICLES</h1>
          <p className="text-xl text-muted-foreground">Explore our latest stories and insights</p>
        </div>

        {/* Button to add new blog post */}
        <div className="mb-8 text-right">
          <Link href="/create-post">
            <Button className="bg-red-900 hover:bg-black" variant="outline">Add New Post</Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="card-hover group h-full overflow-hidden border-lg bg-accent/5 backdrop-blur-sm">
                <div className="aspect-video overflow-hidden">
                  <Image
                  width={800}
                  height={500}
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2">
                    <span className="animated-glow inline-block rounded-full px-3 py-1 text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2 transition-colors group-hover:text-primary">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="font-medium text-primary">{post.readTime}</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;