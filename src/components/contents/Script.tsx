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
import { Skeleton } from '@/components/ui/skeleton'
import MarkdownComponent from "@/components/MarkdownComponent";
import { useState } from "react";

export default function Script() {
  const [scriptInput, setScriptInput] = useState("");
  const [scriptResult, setScriptResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setScriptInput(e.target.value);
  }

  const handleGenerateScript = async () => {
    const result = await fetchOpenAIScript(scriptInput);
    setScriptResult(result);
  }

  const fetchOpenAIScript = async (input: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-script", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate script");
      }

      setIsLoading(false);

      const data = await response.json();
      return data.script;
    } catch (error) {
      console.error("Error fetching script:", error);
      setIsLoading(false);
      return "Error generating script. Please try again later.";
    }
  }

  return (
    <Layout>
      <HeaderContent currentPage="Script" />

      <div className="container mx-auto">
        <Card className="m-4">
          <CardHeader>
            <CardTitle>Script Page</CardTitle>
            <CardDescription>
              This page allows content creators to generate scripts using Gemini AI integration.
            </CardDescription>
          </CardHeader>
        </Card>
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
          <Textarea className="mb-4" placeholder="Enter your script idea here..." value={scriptInput} onChange={handleInputChange} />
          <Button className="w-full mb-5" onClick={handleGenerateScript}>Generate Script</Button>
          <Card>
            <CardContent>
              <CardDescription>
                {isLoading ? (
                  <>
                    <Skeleton className="h-5 w-full mb-1" />
                    <Skeleton className="h-5 w-full mb-1" />
                    <Skeleton className="h-5 w-full" />
                  </>
                ) : (
                  <MarkdownComponent content={scriptResult} />
                )}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}