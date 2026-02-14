import Link from "next/link";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <Container>
        <div className="mx-auto mt-0 grid max-w-screen-xl grid-cols-1 gap-10 border-t border-slate-700 pt-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-semibold text-cyan-300">
              项目看板
            </Link>
            <div className="mt-4 max-w-md text-slate-300">项目成果展示</div>
          </div>

          <div>
            <div className="font-semibold text-white">页面导航</div>
            <div className="-ml-3 mt-2 flex w-full flex-wrap lg:ml-0">
              <Link href="#projects" className="w-full rounded-md px-4 py-2 text-slate-300 hover:text-cyan-300">
                项目看板
              </Link>
              <Link href="#collaborators" className="w-full rounded-md px-4 py-2 text-slate-300 hover:text-cyan-300">
                合作院校
              </Link>
            </div>
          </div>

          <div>
            <div className="font-semibold text-white">支持</div>
            <div className="-ml-3 mt-2 flex w-full flex-wrap lg:ml-0">
              <Link href="/privacy" className="w-full rounded-md px-4 py-2 text-slate-300 hover:text-cyan-300">
                隐私政策
              </Link>
              <Link href="/terms" className="w-full rounded-md px-4 py-2 text-slate-300 hover:text-cyan-300">
                服务条款
              </Link>
            </div>
          </div>
        </div>

        <div className="my-10 text-center text-sm text-slate-400">Copyright © {new Date().getFullYear()} 项目看板.</div>
      </Container>
    </footer>
  );
}
