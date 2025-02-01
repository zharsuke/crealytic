import Layout from "@/components/Layout";
import HeaderContent from "@/components/HeaderContent";

export default function Home() {
  return (
    <Layout>
      <HeaderContent currentPage="Home" />
      <main>
        <h1 className="text-lg p-4">Home</h1>
      </main>
    </Layout>
  );
}