import TodoProvider from "@/routes/todos/providers/TodoProvider";
import DashboardLayout from "@/shared/layout/DashboardLayout";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <TodoProvider>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </TodoProvider>
    );
}
