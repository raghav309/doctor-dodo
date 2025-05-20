import Tree from './Tree';

type SidebarProps = {
    title: string;
};

function Sidebar({ title }: SidebarProps) {
    return (
        <section className="h-screen w-1/5 border-r border-r-[#d1d9e0]">
            <h3>{title}</h3>
            <Tree />
        </section>
    );
}

export default Sidebar;
