import { Container } from "@/components/Container";
import { AdminConsole } from "@/components/admin/AdminConsole";

export default function AdminPage() {
  return (
    <Container>
      <section className="mt-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">后台管理</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">该页面仅用于配置首页展示内容，不在首页对外展示。</p>
      </section>
      <AdminConsole />
    </Container>
  );
}
