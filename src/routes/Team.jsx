import { Form, useFetcher, useLoaderData } from 'react-router-dom';

export default function Team() {
    const data = useLoaderData();
    const feacher = useFetcher();

    return (
        <div>
            <h3>Team {data.team.name}</h3>
            <p>Team Detail</p>
            {/*<Form method="delete">*/}
            {/*    <button>Delete</button>*/}
            {/*</Form>*/}
            <feacher.Form method="delete" action="/teams">
                <input type="hidden" name="id" value={data.team.id} />
                <button>Delete</button>
            </feacher.Form>
        </div>
    );
}
