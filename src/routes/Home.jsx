import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';
export function Component() {
    const data = useLoaderData();

    return (
        <div>
            <h2>Home</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <Await resolve={data.date} errorElement={<div>Error</div>}>
                    {(date) => <p>Date from loader:{date}</p>}
                </Await>
            </Suspense>
        </div>
    );
}
