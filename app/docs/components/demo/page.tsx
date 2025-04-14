import ComponentShowcase from "@/components/component-showcase";
import { Button } from "@/components/crazxy/button/button";
import React from "react";

export default function page() {
  const variants = [
    {
      name: "accent",
      label: "Accent",
      component: <Button variant="accent">Default Button</Button>,
      description: "This is the default variant of the component.",
    },
    {
      name: "destructive",
      label: "Destructive",
      component: <Button variant="destructive">Default Button</Button>,
      description: "This is the default variant of the component.",
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold">Demo Page</h1>
      <p>This is a demo page for the component showcase.</p>
      <p>Here you can add your components and their variants.</p>
      <ComponentShowcase
        variants={variants}
        title="Component Showcase"
        defaultVariant="accent"
      />
    </div>
  );
}
