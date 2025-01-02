import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-10 px-8">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold animate-fadeIn">About Blogs</h1>
          <p className="text-xl text-muted-foreground animate-fadeIn delay-100">
             This Hub for Exchanging Insights, Concepts, and Narratives
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Valuable Resources Card */}
          <Card className="transition-transform transform hover:-translate-y-2 hover:shadow-2xl animate-zoomIn">
            <CardHeader className="text-center">
              <BookOpen className="mx-auto h-8 w-8 mb-2 text-primary" />
              <CardTitle>
                📖 <span className="font-bold">Useful Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
            Well-Researched Articles from Leading Authorities and Innovators
            </CardContent>
          </Card>

          {/* Community Card */}
          <Card className="transition-transform transform hover:-translate-y-2 hover:shadow-2xl animate-zoomIn delay-150">
            <CardHeader className="text-center">
              <Users className="mx-auto h-8 w-8 mb-2 text-primary" />
              <CardTitle>
                👥 <span className="font-bold">Community</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
            Engage with a community of dedicated readers and storytellers
            </CardContent>
          </Card>

          {/* Advancement Card */}
          <Card className="transition-transform transform hover:-translate-y-2 hover:shadow-2xl animate-zoomIn delay-300">
            <CardHeader className="text-center">
              <Zap className="mx-auto h-8 w-8 mb-2 text-primary" />
              <CardTitle>
                ⚡ <span className="font-bold">Advancement</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
            Stay current with emerging trends and advancements
            </CardContent>
          </Card>
        </div>

        {/* Description Section */}
        <div className="prose prose-neutral dark:prose-invert mx-auto mt-12 animate-fadeIn delay-500">
          <p>
            🌍 <strong>Osama Blog</strong> is a platform focused on providing knowledge and insights related to technology, development, and design. Our goal is to establish a space where developers and designers can expand their skills, learn, and connect with others who share similar interests.
          </p>
          <br/>
          <p>
            🚀 Regardless of whether you're an experienced expert or just beginning your path, you'll discover insightful material that keeps you at the forefront in the constantly changing landscape of technology.
          </p>
        </div>
      </div>
    </div>
  );
}
