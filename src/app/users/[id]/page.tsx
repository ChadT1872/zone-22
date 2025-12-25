import { Suspense } from "react";
import User from "../User";

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <User id={id} />
        </Suspense>
    );
}
