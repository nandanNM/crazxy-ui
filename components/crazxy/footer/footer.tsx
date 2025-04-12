import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Youtube, Dribbble } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Footer() {
  const socialLinks = [
    { label: "YouTube", icon: Youtube },
    { label: "Instagram", icon: Instagram },
    { label: "Twitter", icon: Twitter },
    { label: "Dribbble", icon: Dribbble },
  ];

  const links = [
    [
      { label: "Company", key: "header-1" },
      { label: "About us", key: "item-1-1" },
      { label: "Blog", key: "item-1-2" },
      { label: "Contact us", key: "item-1-3" },
      { label: "Pricing", key: "item-1-4" },
      { label: "Testimonials", key: "item-1-5" },
    ],
    [
      { label: "Support", key: "header-2" },
      { label: "Help center", key: "item-2-1" },
      { label: "Terms of service", key: "item-2-2" },
      { label: "Legal", key: "item-2-3" },
      { label: "Privacy policy", key: "item-2-4" },
      { label: "Status", key: "item-2-5" },
    ],
  ];

  return (
    <footer className="w-full text-foreground">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Social Links */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Company Logo"
                width={64}
                height={64}
                className="w-16 h-auto "
              />
              <span className="text-3xl font-bold pl-2">Company Name</span>
            </div>
            <div className="text-foreground/60 space-y-1">
              <p>Copyright 2025 Nexcent ltd.</p>
              <p>All rights reserved</p>
            </div>
            <div className="flex items-center space-x-3">
              {socialLinks.map((socialLink, index) => {
                const Icon = socialLink.icon;
                return (
                  <div
                    key={`social-${index}`}
                    className="p-2 rounded-full text-secondary-foreground/60 bg-primary hover:bg-background hover:text-primary cursor-pointer transition-all ease-in-out duration-400 hover:scale-110 hover:shadow-lg"
                  >
                    <Icon className="w-6 h-6" />
                    <span className="sr-only">{socialLink.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8">
            {links.map((col, colIndex) => (
              <ul key={`col-${colIndex}`} className="space-y-3">
                {col.map((link, linkIndex) => (
                  <li
                    key={`link-${colIndex}-${linkIndex}`}
                    className={`${
                      link.key === "header-1" || link.key === "header-2"
                        ? "text-2xl text-foreground font-semibold mb-2"
                        : "text-muted-foreground hover:text-foreground transition-all duration-500 ease-in-out transform hover:scale-105 hover:translate-x-1 origin-left"
                    } cursor-pointer`}
                  >
                    {link.key.includes("header") ? (
                      link.label
                    ) : (
                      <Link href="#" className="inline-block">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* Newsletter Form */}
          <div className="space-y-4">
            <label className="text-lg font-semibold block">
              Stay up to date
            </label>
            <Input
              type="email"
              placeholder="Subscribe to our email"
              className="bg-background text-foreground border-none py-6 px-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
