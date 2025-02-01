import Layout from "@/components/Layout";
import HeaderContent from "@/components/HeaderContent";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Transcript() {
    return (
        <Layout>
            <HeaderContent currentPage="Home" />

            <div className="container mx-auto">
                <Card className="m-4">
                    <CardHeader>
                        <CardTitle>Transcript Page</CardTitle>
                        <CardDescription>
                            This page allows content creators to transcribe audio files to text.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </Layout>
    )
}