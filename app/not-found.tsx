import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  title: "404 | crazxyUI",
};

export default function NotFound() {
  return (
    <>
      <PageHeader title="404" className="mb-6">
        The page you&apos;re looking for does not exist or is no longer here.
      </PageHeader>
      <div className="text-center">
        <Button asChild className="rounded-full">
          <Link href="/">Browse components</Link>
        </Button>
      </div>
    </>
  );
}
