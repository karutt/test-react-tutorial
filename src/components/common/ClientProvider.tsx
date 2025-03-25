"use client";

import dynamic from "next/dynamic";

const Provider = dynamic(() => import("@/components/ui/provider").then((mod) => mod.Provider), {
    ssr: false,
});

export default function ClientProvider({ children }: { children: React.ReactNode }) {
    return <Provider>{children}</Provider>;
}
