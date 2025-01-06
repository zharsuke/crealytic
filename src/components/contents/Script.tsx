import Layout from "@/components/Layout";

export default function Script() {
    return (
        <Layout>
            <div className="grid grid-cols-2 gap-4 my-4">
                <div className="border border-dashed border-primary rounded-md p-2">
                    <h1 className="text-xl">Example Prompt 1:</h1>
                    <p>Explain the concept of closures in JavaScript with
                        examples.
                    </p>
                </div>
                <div className="border border-dashed border-primary rounded-md p-2">
                    <h1 className="text-xl">Example Prompt 2</h1>
                    <p>
                        Describe the lifecycle methods in React and their use
                        cases.
                    </p>
                </div>
                <div className="border border-dashed border-primary rounded-md p-2">
                    <h1 className="text-xl">Example Prompt 3</h1>
                    <p>
                        Write a script for a tutorial on setting up a Node.js
                        server.
                    </p>
                </div>
                <div className="border border-dashed border-primary rounded-md p-2">
                    <h1 className="text-xl">Example Prompt 4</h1>
                    <p>
                        Discuss the benefits and drawbacks of using TypeScript in
                        a project.
                    </p>
                </div>
            </div>

            <textarea className="textarea textarea-primary w-full" placeholder="Enter your script idea here..."></textarea>
            <button className="btn btn-primary w-full my-4">Generate Script</button>
        </Layout>
    )
}