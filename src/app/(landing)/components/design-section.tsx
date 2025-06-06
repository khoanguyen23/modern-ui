"use client";

import type React from "react";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/modern-ui/button";
import { motion, useInView } from "motion/react";
import dynamic from "next/dynamic";
import { AnimatedContent } from "./animated-content";

const Github = dynamic(() => import("@/components/assets-theme/github"), {
  ssr: false,
});
export function DesignSection() {
  return (
    <section className="relative py-20 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-100/40 via-background to-background dark:from-purple-900/10"></div>
      <div className="container">
        <div className="mx-auto grid max-w-5xl items-center lg:gap-16 gap-10 lg:grid-cols-2">
          <AnimatedContent>
            <div className="space-y-6">
              <div className="inline-flex rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                Modern Design System
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Build beautiful interfaces in record time
              </h2>
              <p className="text-lg text-muted-foreground">
                Focus on your product, not on reinventing UI components. Our
                components are designed to be accessible, customizable, and work
                seamlessly with Next.js 15.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/docs">Get Started</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                  asChild
                >
                  <Link
                    href="https://github.com/thangdevalone/modern-ui"
                    className="flex items-center gap-2"
                    target="_blank"
                  >
                    <Github isInvert={true} />
                    Star on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedContent>
          <AnimatedContent customDelay={0.2}>
            <motion.div className="relative hidden sm:block mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border bg-background p-2 shadow-2xl lg:ml-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
              <div className="flex h-full flex-col rounded-xl border bg-background/80 p-6 backdrop-blur-sm">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-4 w-24 rounded-md bg-muted"></div>
                </div>
                <div className="grid gap-4">
                  <div className="h-10 w-full rounded-md bg-muted"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 rounded-md bg-muted"></div>
                    <div className="h-20 rounded-md bg-muted"></div>
                  </div>
                  <div className="h-32 w-full rounded-md bg-muted"></div>
                  <div className="flex justify-end gap-2">
                    <div className="h-8 w-20 rounded-md bg-muted"></div>
                    <div className="h-8 w-20 rounded-md bg-primary"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
