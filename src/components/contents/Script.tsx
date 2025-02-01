import Layout from "@/components/Layout";
import HeaderContent from "@/components/HeaderContent";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Script() {
  return (
    <Layout>
      <HeaderContent currentPage="Script" />

      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 my-4 p-4">
          <Card>
            <CardHeader>
              <CardTitle>Example Prompt 1:</CardTitle>
              <CardDescription>
                Explain the concept of closures in JavaScript with examples.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Example Prompt 2:</CardTitle>
              <CardDescription>
                Describe the lifecycle methods in React and their use cases.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Example Prompt 3:</CardTitle>
              <CardDescription>
                Write a script for a tutorial on setting up a Node.js server.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Example Prompt 4:</CardTitle>
              <CardDescription>
                Discuss the benefits and drawbacks of using TypeScript in a project.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="p-4">
          <Textarea className="mb-4" placeholder="Enter your script idea here..." />
          <Button className="w-full mb-5">Generate Script</Button>
          {/* <Card>
            <CardContent>
              <CardDescription></CardDescription>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </Layout>
  );
}