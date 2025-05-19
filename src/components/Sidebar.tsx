import Tree from './Tree';

type SidebarProps = {
    title: string;
};

function Sidebar({ title }: SidebarProps) {
    return (
        <section className="h-screen w-3/4 border">
            <h3>{title}</h3>
            <Tree />
        </section>
    );
}

export default Sidebar;
