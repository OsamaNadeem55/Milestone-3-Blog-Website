import {
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-12 border-t relative z-10 bg-red-900 backdrop-blur-sm px-2">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-gradient text-white text-2xl font-bold tracking-tighter">
              OSAMA BLOG
            </h3>
            <p className="text-muted-foreground text-white">
            The Leading Place for Detailed Game Articles, and Industry Insights. Connect with a Community of Passionate Developers and Game Advocates.
            </p>
            <div className="flex items-center space-x-4 pt-2 text-white">
              <Mail className="h-4 w-4 text-muted-foreground text-white" />
              <span className="text-sm text-muted-foreground text-white">
                osamanadeem4345@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <Phone className="h-4 w-4 text-muted-foreground text-white" />
              <span className="text-sm text-muted-foreground text-white">
                +44 (7743) 768695
              </span>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <MapPin className="h-4 w-4 text-muted-foreground text-white" />
              <span className="text-sm text-muted-foreground text-white">
                224 Wonder Street 2, Near Effiel Tower
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 ml-0 md:ml-14">
            <h4 className="text-lg font-semibold">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-black  text-white transition-colors flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Latest Articles</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-black  text-white transition-colors flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Categories</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-black  text-white transition-colors flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" ></span>
                  <span>Meet the Creators</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-black  text-white transition-colors flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Resource</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-black text-white transition-colors flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Newsletter</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-black   text-white transition-colors flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Gaming Events</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-black  text-white transition-colors flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Write for Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-black  text-white transition-colors flex items-center space-x-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>FAQs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Join With Us</h4>
            <p className="text-muted-foreground text-white">
            Connect with us on Social Platforms for Real-Time Updates and Expertise.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-black transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-black transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-black transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-black transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-black transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:osamanadeem4345@gmail.com"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-black transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-sm text-muted-foreground text-center text-white md:text-left">
              © {new Date().getFullYear()} OSAMA BLOG. All Rights Reserved.
              <Link href="/privacy" className="hover:text-black ml-4">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-black ml-4">
                Terms of Service
              </Link>
            </p>
            <p className="text-sm text-muted-foreground text-center text-white md:text-right">
              Create By Osama Nadeem
            </p>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-accent/10 via-transparent to-transparent animate-spin-slow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary/10 via-transparent to-transparent animate-spin-slow" />
      </div>
    </footer>
  );
};

export default Footer;
