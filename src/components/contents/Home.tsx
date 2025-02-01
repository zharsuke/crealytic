import Layout from "@/components/Layout";
import HeaderContent from "@/components/HeaderContent";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <Layout>
      <HeaderContent currentPage="Home" />

      <div className="container mx-auto">
        <Card className="m-4">
          <CardHeader>
            <CardTitle>Welcome to Crealytic</CardTitle>
            <CardDescription>
              Crealytic is an innovative tool designed to empower content creators with cutting-edge AI technology. This platform is built to streamline and enhance the creative process, making it easier for creators to focus on what they do best—crafting compelling content.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </Layout>
  );
}