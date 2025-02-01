import Layout from "@/components/Layout";
import HeaderContent from "@/components/HeaderContent";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Analytic() {
    return (
        <Layout>
            <HeaderContent currentPage="Home" />

            <div className="container mx-auto">
                <Card className="m-4">
                    <CardHeader>
                        <CardTitle>Analytic Page</CardTitle>
                        <CardDescription>
                            Analyze your TikTok content performance data and get AI-powered insights
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </Layout>
    )
}